import ErrorPage from "next/error"
import { useRouter } from "next/router"

import Layout from "@components/Layout"
import BlockManager from "@components/shared/BlockManager"
import { IPage } from "@models/IPage"
import { getPageData, fetchAPI, getGlobalData } from "@utils/api"
import { getLocalizedPaths } from "@utils/localize"
import { IPageContext } from "@models/IPageContext"

const DynamicPage = ({ blocks, metadata, preview, global, pageContext }) => {
  const router = useRouter()

  // Check if the required data was provided
  if (!router.isFallback && !blocks?.length) {
    return <ErrorPage statusCode={404} />
  }
  console.log("global", global)
  console.log("navbar", global.navbar)

  // Loading screen (only possible in preview mode)
  if (router.isFallback) {
    return <div className="container">Loading...</div>
  }

  return (
    <Layout global={global} pageContext={pageContext} preview={preview}>
      {/* <Seo seo={delve(pageData, "seo")} /> */}
      {blocks && <BlockManager blocks={blocks} />}
    </Layout>
  )
}

export async function getStaticPaths(context) {
  // Get all pages from Strapi
  const allPages = context.locales.map(async (locale) => {
    const localePages = await fetchAPI(`/pages?_locale=${locale}`)
    return localePages
  })

  const pages = await (await Promise.all(allPages)).flat()

  const paths = pages.map((page: IPage) => {
    // Decompose the slug that was saved in Strapi
    const slugArray = !page.slug ? false : page.slug.split("/")

    return {
      params: { slug: slugArray },
      // Specify the locale to render
      locale: page.locale,
    }
  })

  return { paths, fallback: true }
}

export async function getStaticProps(context) {
  const { params, locale, locales, defaultLocale, preview = null } = context

  const globalLocale = await getGlobalData(locale)
  // Fetch pages. Include drafts if preview mode is on
  const pageData = await getPageData(
    { slug: !params.slug ? [""] : params.slug },
    locale,
    preview
  )

  if (pageData == null) {
    // Giving the page no props will trigger a 404 page
    return { props: {} }
  }

  // We have the required page data, pass it to the page component
  const { blocks, localizations, slug } = pageData
  console.log(pageData)
  console.log(pageData.blocks[0].heading)

  const pageContext: IPageContext = {
    locale: pageData.locale,
    locales,
    defaultLocale,
    slug,
    localizations,
  }

  const localizedPaths = getLocalizedPaths(pageContext)

  return {
    props: {
      preview,
      blocks: blocks,
      global: globalLocale,
      pageContext: {
        ...pageContext,
        localizedPaths,
      },
    },
  }
}

export default DynamicPage

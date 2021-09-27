import ErrorPage from "next/error"
import { useRouter } from "next/router"

import Layout from "@components/Layout"
import BlockManager from "@components/shared/BlockManager"
import Seo from "@components/shared/Seo"
import { IPage } from "@models/IPage"
import { IPageContext } from "@models/IPageContext"
import { getPageData, fetchAPI, getGlobalData } from "@utils/api"
import { getLocalizedPaths } from "@utils/localize"

const DynamicPage = ({ blocks, metadata, preview, global, pageContext }) => {
  const router = useRouter()

  // Check if the required data was provided
  if (!router.isFallback && !blocks?.length) {
    return <ErrorPage statusCode={404} />
  }

  // Loading screen (only possible in preview mode)
  if (router.isFallback) {
    return <div className="container">Loading...</div>
  }

  return (
    <Layout global={global} pageContext={pageContext} preview={preview}>
      <Seo {...metadata} />
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
  const { blocks, localizations, slug, metadata } = pageData

  const pageContext: IPageContext = {
    locale: pageData.locale,
    locales,
    defaultLocale,
    slug,
    localizations,
  }

  const meta = {
    ...metadata,
    titleSuffix: globalLocale.metadata.titleSuffix,
  }

  const localizedPaths = getLocalizedPaths(pageContext)

  return {
    props: {
      preview,
      metadata: meta,
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

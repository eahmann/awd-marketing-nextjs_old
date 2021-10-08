import React from "react"
import { useEffect } from "react"

import { Provider } from "next-auth/client"
import { useSession } from "next-auth/client"
import { DefaultSeo } from "next-seo"
import "@/styles/tailwind.scss"
import App from "next/app"
import ErrorPage from "next/error"
import Head from "next/head"
import { useRouter } from "next/router"

import { IImage } from "@/types/IImage"
import { getGlobalData } from "@/utils/api"
import { getStrapiMedia } from "@/utils/media"

function MyApp({ Component, pageProps }): JSX.Element {
  const router = useRouter()

  // Extract the data we need
  const { global } = pageProps
  if (global == null) {
    return <ErrorPage statusCode={404} />
  }

  const urlPath = router.asPath.endsWith("/")
    ? router.asPath
    : router.asPath + "/"

  const { metadata } = global

  return (
    <Provider session={pageProps.session}>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <>
          {/* Favicon */}
          <Head>
            <link
              rel="shortcut icon"
              href={getStrapiMedia(global.favicon.url)}
            />
          </Head>
          <DefaultSeo
            title={metadata.metaTitle}
            titleTemplate={`%s | ${metadata.titleSuffix}`}
            description={metadata.metaDescription}
            canonical={metadata.defaultUrl + urlPath}
            openGraph={{
              type: "website",
              title: `${metadata.title} | ${metadata.titleSuffix}`,
              description: metadata.metaDescription,
              images: Object.values(metadata.shareImage.formats).map(
                (image: IImage) => {
                  return {
                    url: getStrapiMedia(image.url),
                    width: image.width,
                    height: image.height,
                  }
                }
              ),
              url: metadata.defaultUrl + router.asPath,
            }}
            // Only included Twitter data if we have it
            twitter={{
              ...(metadata.twitterCardType && {
                cardType: metadata.twitterCardType,
              }),
              ...(metadata.twitterUsername && {
                handle: metadata.twitterUsername,
              }),
            }}
          />
          <Component {...pageProps} />
        </>
      )}
    </Provider>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (appContext) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)
  const globalLocale = await getGlobalData(appContext.router.locale)

  return {
    ...appProps,
    pageProps: {
      global: globalLocale,
    },
  }
}

function Auth({ children }) {
  const [session, loading] = useSession()
  const isUser = !!session?.user
  const router = useRouter()
  useEffect(() => {
    if (loading) return // Do nothing while loading
    if (!isUser) router.push("/login")
    // If not authenticated, force log in
  }, [isUser, loading])
  if (isUser) {
    return children
  }
  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>
}

export default MyApp

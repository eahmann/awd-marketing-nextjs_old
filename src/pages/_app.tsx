import React from "react"

import { DefaultSeo } from "next-seo"
import { AppProps } from "next/app"
import "@styles/tailwind.scss"
import App from "next/app"
import ErrorPage from "next/error"
import Head from "next/head"

import { getGlobalData } from "@utils/api"
import { getStrapiMedia } from "@utils/media"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  // Extract the data we need
  const { global } = pageProps
  if (global == null) {
    return <ErrorPage statusCode={404} />
  }

  const { metadata } = global

  return (
    <>
      {/* Favicon */}
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon.url)} />
      </Head>
      <DefaultSeo
        title={metadata.title}
        titleTemplate={`%s | ${metadata.titleSuffix}`}
      />
      <Component {...pageProps} />
    </>
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

export default MyApp

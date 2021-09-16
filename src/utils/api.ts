// Get the url of the Strapi API based om the env variable or the default local one.
export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path, options = {}) {
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
    },
  }
  const mergedOptions = {
    ...defaultOptions,
    ...options,
  }
  const requestUrl = getStrapiURL(path)
  const response = await fetch(requestUrl, mergedOptions)

  if (!response.ok) {
    console.error(response.statusText)
    throw new Error(`An error occured please try again`)
  }
  const data = await response.json()
  return data
}

/**
 *
 * @param {object} params The router params object with slug: { slug: [<slug>] }
 * @param {string} locale The current locale specified in router.locale
 * @param {boolean} preview router isPreview value
 */
export async function getPageData(params, locale, preview) {
  const slug = params.slug.join("/")
  // Find the pages that match this slug
  const pagesData = await fetchAPI(`/pages?slug=${slug}&_locale=${locale}`)

  // Make sure we found something, otherwise return null
  if (pagesData == null || pagesData.length === 0) {
    return null
  }

  // Return the first item since there should only be one result per slug
  return pagesData[0]
}

// Get site data from Strapi (metadata, navbar, footer...)
export async function getGlobalData(locale) {
  const global = await fetchAPI(`/global?_locale=${locale}`)
  return global
}

// This function will get the url of your medias depending on where they are hosted
export function getStrapiMedia(url) {
  if (url == null) {
    return null
  }

  // Return the full URL if the media is hosted on an external provider
  if (url.startsWith("http") || url.startsWith("//")) {
    return url
  }

  // Otherwise prepend the URL path with the Strapi URL
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${url}`
}

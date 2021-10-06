import fs from "fs"

import { IPage } from "@types/IPage"
import { fetchAPI } from "@/utils/api"

const Sitemap = () => {}

interface slugDetail {
  slug: string
  updatedAt: string
}

const getSlugs = async () => {
  const locales = ["en"]

  const allPages = locales.map(async (locale) => {
    const localePages = await fetchAPI(`/pages?_locale=${locale}`)
    return localePages
  })

  const pages = await (await Promise.all(allPages)).flat()

  const paths: Array<slugDetail> = pages.map((page: IPage) => {
    const slug = !page.slug ? "" : page.slug
    const updatedAt = page.updated_at

    return {
      slug: slug,
      updatedAt: updatedAt,
    }
  })
  return paths
}

export const getServerSideProps = async ({ res }) => {
  const baseUrl = {
    development: "http://localhost:3000",
    production: "https:/hci.ahmann.dev",
  }[process.env.NODE_ENV]

  const staticPages = fs
    .readdirSync(
      {
        development: "src/pages",
        production: "./",
      }[process.env.NODE_ENV]
    )
    .filter((staticPage) => {
      return ![
        "_app.tsx",
        "_document.tsx",
        "_error.tsx",
        "[[...slug]].tsx",
        "sitemap.xml.tsx",
        ".next",
        "___next_launcher.js",
        "___vc_bridge.js",
        "node_modules",
        "package.json",
      ].includes(staticPage)
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`
    })

  const slugs = await getSlugs()

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${staticPages
            .map((url) => {
              return `
                <url>
                  <loc>${url}</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <changefreq>monthly</changefreq>
                  <priority>1.0</priority>
                </url>
              `
            })
            .join("")}
            ${slugs
              .map(({ slug, updatedAt }) => {
                return `
                  <url>
                    <loc>${baseUrl}/${slug}</loc>
                    <lastmod>${updatedAt}</lastmod>
                    <changefreq>monthly</changefreq>
                    <priority>1.0</priority>
                  </url>
                `
              })
              .join("")}
        </urlset>
      `

  res.setHeader("Content-Type", "text/xml")
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default Sitemap

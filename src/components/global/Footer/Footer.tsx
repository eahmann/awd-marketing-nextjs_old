import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa"

import CustomLink from "@/components/shared/CustomLink"
import NextImage from "@/components/shared/NextImage"

import LocaleSwitch from "../LocaleSwitch"

const Footer = ({
  contactInfo,
  social,
  logo,
  smallText,
  columns,
  pageContext,
}) => {
  return (
    <footer
      className="border-t border-gray-200 bg-gray-50"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <NextImage width="120" height="80" media={logo} />
            <p className="text-base text-gray-500">{smallText}</p>
            <div className="flex space-x-6">
              {social.facebook && (
                <CustomLink
                  link={{
                    href: "http://www.facebook.com/" + social.facebook,
                    newTab: true,
                  }}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{social.facebook}</span>
                  <FaFacebookSquare className="w-6 h-6" aria-hidden="true" />
                </CustomLink>
              )}
              {social.instagram && (
                <CustomLink
                  link={{
                    href: "http://www.instagram.com/" + social.instagram,
                    newTab: true,
                  }}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{social.instagram}</span>
                  <FaInstagramSquare className="w-6 h-6" aria-hidden="true" />
                </CustomLink>
              )}
              {social.twitter && (
                <CustomLink
                  link={{
                    href: "http://www.twitter.com/" + social.twitter,
                    newTab: true,
                  }}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{social.twitter}</span>
                  <FaTwitterSquare className="w-6 h-6" aria-hidden="true" />
                </CustomLink>
              )}
            </div>
          </div>
          <div className="flex flex-col flex-wrap justify-center mt-12 sm:flex-row gap-12 xl:mt-0 md:col-span-2">
            {columns.map((column) => (
              <div key={column.id} className="md:grid md:grid-cols-1 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                    {column.title}
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <CustomLink link={link} className="">
                          <span className="text-base text-gray-500 hover:text-gray-900">
                            {link.label}
                          </span>
                        </CustomLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <LocaleSwitch pageContext={pageContext} />
        <div className="pt-8 mt-12 border-t border-gray-200">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2021 Hisken Construction, Inc. All rights reserved. Website
            by Ahmann Web Development
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

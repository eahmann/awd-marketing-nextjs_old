import { Fragment } from "react"
import { useState, useEffect } from "react"

import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import Link from "next/link"
import { useRouter } from "next/router"

import ButtonLink from "@components/shared/ButtonLink"
import NextImage from "@components/shared/NextImage/NextImage"
import { INavbar } from "@models/INavbar"
import { IPageContext } from "@models/IPageContext"

import NavItem from "./NavItem"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

type Props = {
  navbar: INavbar
  pageContext: IPageContext
}

const Navbar: React.FC<Props> = ({ navbar, pageContext }) => {
  const router = useRouter()
  const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false)

  useEffect(() => {
    mobileMenuIsShown && (document.body.style.overflow = "hidden")
    !mobileMenuIsShown && (document.body.style.overflow = "auto")
  }, [mobileMenuIsShown])

  return (
    <Popover className="relative border-t-4 border-b border-gray-200 bg-gray-50 border-t-brand-500">
      {({ open }) => (
        <>
          <Popover.Overlay
            onMouseDown={() => setMobileMenuIsShown(false)}
            className={`${
              open
                ? "opacity-50 fixed inset-0 z-10 transition-opacity duration-400 w-screen h-screen"
                : "opacity-0"
            } bg-black`}
          />
          <div className="px-4 mx-auto sm:px-6">
            <div className="flex items-center justify-between py-2 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">
                  <a>
                    <span className="sr-only">Link Home</span>
                    <div className={"md:hidden max-h-45px"}>
                      <NextImage width="75" height="45" media={navbar.logo} />
                    </div>
                    <div className={"lt-md:hidden max-h-75px"}>
                      <NextImage width="120" height="75" media={navbar.logo} />
                    </div>
                  </a>
                </Link>
              </div>

              {/* Mobile nav trigger */}
              <div
                className="-my-2 -mr-2 md:hidden"
                onClick={() => setMobileMenuIsShown(true)}
              >
                <Popover.Button
                  className={`${
                    open
                      ? "opacity-0 transition-opacity duration-700"
                      : "opacity-100"
                  } inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500 border-2 h-10 w-10`}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>

              {/* Centered links */}
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                {navbar.items.map((item) => (
                  <>
                    <NavItem
                      key={item.id}
                      itemData={item}
                      className={`border-b-2 border-transparent rounded-none focus:border-transparent focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 ${
                        "/" + router.query["slug"] === item.href
                          ? "text-brand-500 border-brand-500"
                          : "hover:border-brand-500 hover:text-brand-500"
                      }`}
                    />
                  </>
                ))}
              </Popover.Group>

              {/* Right side buttons */}
              <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
                {navbar.buttons.map((button) => (
                  <ButtonLink key={button.id} button={button} />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile nav */}
          <Transition
            as={Fragment}
            enter="transition ease duration-700 transform"
            enterFrom="opacity-0 -translate-x-full"
            enterTo="opacity-100 translate-x-0"
            leave="transition ease duration-700 transform"
            leaveFrom="opacity-100 -translate-x-0"
            leaveTo="opacity-0 -translate-x-full"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-20 w-3/4 transition transform origin-top-right md:hidden"
            >
              {({ close }) => (
                <div className="h-screen bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
                  <div className="pb-6">
                    <div className="flex items-center justify-between border-b border-gray-300 bg-gray-50">
                      <div
                        className="px-4 py-2 sm:px-6 "
                        onClick={() => {
                          setMobileMenuIsShown(false)
                          close()
                        }}
                      >
                        <Link href="/">
                          <a onClick={() => setMobileMenuIsShown(false)}>
                            <span className="sr-only">Link Home</span>
                            <div className={"md:hidden max-h-45px"}>
                              <NextImage
                                width="75"
                                height="45"
                                media={navbar.logo}
                              />
                            </div>
                          </a>
                        </Link>
                      </div>
                      <div
                        className="px-4"
                        onClick={() => setMobileMenuIsShown(false)}
                      >
                        <Popover.Button
                          onClick={() => setMobileMenuIsShown(false)}
                          className="inline-flex items-center justify-center w-10 h-10 py-2 text-gray-400 bg-white border-2 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500"
                        >
                          <span className="sr-only">Close menu</span>
                          <XIcon className="w-6 h-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 mt-2">
                      <nav className="grid gap-y-2">
                        {navbar.items.map((item) => (
                          <div
                            onClick={() => {
                              item.children.length <= 1
                                ? (setMobileMenuIsShown(false), close())
                                : null
                            }}
                            key={item.id}
                          >
                            <NavItem
                              itemData={item}
                              menuState={setMobileMenuIsShown}
                              closeHook={close}
                              className={`border-l-2 border-transparent rounded-none w-full py-4 text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 ${
                                "/" + router.query["slug"] === item.href
                                  ? "text-brand-500 border-brand-500 bg-gray-50"
                                  : "hover:border-brand-500 hover:text-brand-500 hover:bg-gray-50"
                              }`}
                            />
                          </div>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="px-5 py-6 space-y-6">
                    <div>
                      {navbar.buttons.map((button) => (
                        <div
                          key={button.id}
                          onMouseDown={() => {
                            close()
                            setMobileMenuIsShown(false)
                          }}
                        >
                          <ButtonLink button={button} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default Navbar

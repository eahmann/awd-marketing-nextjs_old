import { Fragment } from "react"

import { Popover, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"

import { INavItem } from "@/types/INavItem"

import NavLink from "../NavLink"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}
type Props = {
  data: INavItem
  menuState?: any
  closeHook?: any
}

const NavPopover: React.FC<Props> = ({ data, menuState, closeHook }) => {
  function handleNavClose(value) {
    menuState ? menuState(value) : null
    closeHook ? closeHook() : null
  }

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-gray-900" : "text-gray-500",
              "group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 py-4 md:py-0 w-full"
            )}
          >
            <span className="w-full pl-2 mr-4 text-left md:mr-0 md:pl-0">
              {data.label}
            </span>
            <ChevronDownIcon
              className={classNames(
                open ? "text-gray-600" : "text-gray-400",
                "ml-1 mr-2 md:mr-0 h-5 w-5 group-hover:text-gray-500"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 w-48 px-2 mt-3 -ml-2 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
              {({ close }) => (
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative p-2 bg-white grid sm:p-2">
                    {data.children.map((item) => (
                      <div
                        key={item.id}
                        onClick={async () => {
                          close()
                          handleNavClose(false)
                        }}
                      >
                        <NavLink
                          data={item}
                          className="w-full px-2 py-4 text-left focus:outline-none"
                        />
                      </div>
                    ))}
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

export default NavPopover

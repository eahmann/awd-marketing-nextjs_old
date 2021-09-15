import { Fragment } from "react"

import { Popover, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"

import { INavItem } from "@models/INavItem"

import NavLink from "../NavLink"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}
type Props = {
  data: INavItem
}

const NavPopover: React.FC<Props> = ({ data }) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-gray-900" : "text-gray-500",
              "group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
            )}
          >
            <span>{data.label}</span>
            <ChevronDownIcon
              className={classNames(
                open ? "text-gray-600" : "text-gray-400",
                "ml-2 h-5 w-5 group-hover:text-gray-500"
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
            <Popover.Panel className="absolute z-10 w-48 px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
              {({ close }) => (
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative px-5 py-6 bg-white grid sm:p-2">
                    {data.children.map((item) => (
                      <div
                        key={item.id}
                        onClick={async () => {
                          close()
                        }}
                      >
                        <NavLink
                          data={item}
                          className="inline-block w-full py-3 pl-2 text-left hover:bg-gray-50 rounded-md"
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

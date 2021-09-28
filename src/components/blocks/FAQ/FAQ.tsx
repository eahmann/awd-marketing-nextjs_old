import { Disclosure, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/outline"
import classNames from "classnames"

const FAQ = ({ title, questions, marginTop, marginBottom }) => {
  return (
    <section
      className={classNames({ "mt-20": marginTop }, { "mb-20": marginBottom })}
    >
      <div className="bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2">
            {title && (
              <h2 className="text-xl font-extrabold text-left text-gray-900 sm:text-xl">
                {title}
              </h2>
            )}
            <dl className="mt-2 space-y-6 divide-y divide-gray-200">
              {questions.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-400">
                          <span className="font-medium text-gray-900">
                            {faq.question}
                          </span>
                          <span className="flex items-center ml-6 h-7">
                            <ChevronDownIcon
                              className={classNames(
                                open ? "-rotate-180" : "rotate-0",
                                "h-6 w-6 transform duration-150"
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Transition
                        enter="transition duration-200 ease-out"
                        enterFrom="transform scale-75 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-150 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel as="dd" className="pr-12 mt-2">
                          <p className="text-base text-gray-500">
                            {faq.answer}
                          </p>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ

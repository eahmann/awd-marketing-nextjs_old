import React, { useState } from "react"

import { MailIcon, PhoneIcon } from "@heroicons/react/outline"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as yup from "yup"

import { fetchAPI } from "@/utils/api"

interface Values {
  firstName: string
  lastName: string
  email: string
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const ContactUsForm = ({ contactInfo }) => {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validationSchema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    company: yup.string(),
    email: yup.string().email("Email is invalid").required("Email is required"),
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(phoneRegExp, "Phone number is not valid"),
    message: yup.string().required("Message is required"),
  })

  return (
    <>
      <div className="px-4 pb-12 overflow-hidden bg-white sm:px-6 lg:px-8 sm:pb-16">
        <div className="relative max-w-xl mx-auto">
          <div className="">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                company: "",
                email: "",
                phone: "",
                message: "",
                api: "",
              }}
              validationSchema={validationSchema}
              onSubmit={async (values, { setSubmitting, setErrors }) => {
                setLoading(true)

                try {
                  setErrors({ api: null })
                  await fetchAPI("/contact-us-form-submissions", {
                    method: "POST",
                    body: JSON.stringify(values),
                  })
                } catch (err) {
                  setErrors({ api: err.message })
                }

                setLoading(false)
                setSubmitting(false)
                setSubmitted(true)
              }}
            >
              {({ errors, touched, isSubmitting }) => (
                <>
                  <Form className="grid grid-cols-1 gap-y-7 sm:grid-cols-2 sm:gap-x-8">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <div className="mt-1">
                        <Field
                          type="text"
                          name="firstName"
                          id="firstName"
                          autoComplete="given-name"
                          className="block w-full px-4 py-3 border-gray-300 shadow-sm focus:ring-brand-500 focus:border-brand-500 rounded-md"
                        />
                      </div>
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="absolute mt-1 text-xs text-red-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <div className="mt-1">
                        <Field
                          type="text"
                          name="lastName"
                          id="lastName"
                          autoComplete="family-name"
                          className="block w-full px-4 py-3 border-gray-300 shadow-sm focus:ring-brand-500 focus:border-brand-500 rounded-md"
                        />
                      </div>
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="absolute mt-1 text-xs text-red-500"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Company
                      </label>
                      <div className="mt-1">
                        <Field
                          type="text"
                          name="company"
                          id="company"
                          autoComplete="organization"
                          className="block w-full px-4 py-3 border-gray-300 shadow-sm focus:ring-brand-500 focus:border-brand-500 rounded-md"
                        />
                      </div>
                      <ErrorMessage
                        name="company"
                        component="div"
                        className="absolute mt-1 text-xs text-red-500"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <Field
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full px-4 py-3 border-gray-300 shadow-sm focus:ring-brand-500 focus:border-brand-500 rounded-md"
                        />
                      </div>
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="absolute mt-1 text-xs text-red-500"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone number
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <Field
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          className="block w-full px-4 py-3 border-gray-300 focus:ring-brand-500 focus:border-brand-500 rounded-md"
                          placeholder="555-123-4567"
                        />
                      </div>
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="absolute mt-1 text-xs text-red-500"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Message
                      </label>
                      <div className="mt-1">
                        <Field
                          as="textarea"
                          id="message"
                          name="message"
                          rows={4}
                          className="block w-full px-4 py-3 border border-gray-300 shadow-sm focus:ring-brand-500 focus:border-brand-500 rounded-md"
                          defaultValue={""}
                        />
                      </div>
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="absolute mt-1 text-xs text-red-500"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white border border-transparent bg-brand-500 rounded-md shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500 disabled:cursor-default"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                  <p className="h-8 mt-1 ml-2 text-sm text-left text-red-500">
                    {errors.api}
                  </p>
                  {submitted && (
                    <div className="text-center border-b-2 shadow-md sm:border-2 border-primary-400 sm:max-w-xl sm:rounded-md bg-primary-50 bg-opacity-40 sm:px-10 xl:p-12">
                      <span className="font-medium text-gray-800 text-md">
                        Thank you for your message. We will get back to you as
                        soon as possible.
                      </span>
                    </div>
                  )}
                </>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Contact Information
          </h2>
        </div>
        <div className="px-6 py-10 mx-auto mt-6 mb-20 overflow-hidden border-t-2 border-b-2 shadow-md sm:border-2 border-brand-400 sm:max-w-xl sm:rounded-md bg-gray-50 sm:px-10 xl:p-12">
          <p className="mt-2 text-base text-gray-800">
            <span className="block font-bold">Mailing address:</span>
            <span className="block">{contactInfo.name}</span>
            {contactInfo.addressLine1 && (
              <span className="block">{contactInfo.addressLine1}</span>
            )}
            {contactInfo.addressLine2 && (
              <span className="block">{contactInfo.addressLine2}</span>
            )}
            <span className="inline">
              {contactInfo.city} {contactInfo.stateCode}, {contactInfo.zipCode}
            </span>
            {contactInfo.zipPlus && (
              <span className="inline">-{contactInfo.zipPlus}</span>
            )}
          </p>
          <dl className="mt-8 space-y-6">
            <dt>
              <span className="sr-only">Phone number</span>
            </dt>
            <dd className="flex text-base text-brand-800">
              <a href={`tel:${contactInfo.phone}`}>
                <PhoneIcon
                  className="flex-shrink-0 inline w-6 h-6 text-brand-600"
                  aria-hidden="true"
                />
                <span className="ml-3">{contactInfo.phone}</span>
              </a>
            </dd>
            <dt>
              <span className="sr-only">Email</span>
            </dt>
            <dd className="flex text-base text-brand-800">
              <a href={`mailto:${contactInfo.email}`}>
                <MailIcon
                  className="flex-shrink-0 inline w-6 h-6 text-brand-600"
                  aria-hidden="true"
                />
                <span className="ml-3">{contactInfo.email}</span>
              </a>
            </dd>
          </dl>
        </div>
      </div>
    </>
  )
}

export default ContactUsForm

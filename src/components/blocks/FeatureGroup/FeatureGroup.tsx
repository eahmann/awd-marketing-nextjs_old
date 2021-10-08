import classNames from "classnames"
import { FiArrowRight } from "react-icons/fi"

import CustomLink from "@/components/shared/CustomLink"
import Heading from "@/components/shared/Heading"
import { IHeading } from "@/types/IHeading"
import { getStrapiMedia } from "@/utils/media"

interface Props {
  heading: IHeading
}

const FeatureGroup = ({ heading, features, settings }) => {
  return (
    <section>
      {heading && <Heading {...heading} />}
      <div className="flex flex-col py-10 mx-2 sm:mx-auto gap-20 sm:px-6 lg:px-8 max-w-7xl">
        {features &&
          features.map((feature, index) => (
            <div
              className={classNames(
                // Common classes
                "flex flex-col justify-start md:justify-between  gap-10  bg-gray-50 p-6 rounded-xl shadow-lg",
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              )}
              key={feature.id}
            >
              {/* Text section */}
              <div className="flex flex-col w-full px-4 text-lg lg:w-6/12 lg:pr-6 sm:px-0">
                <div className="flex-grow">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 ">
                    {feature.title}
                  </h2>
                  <p className="my-6">{feature.text}</p>
                </div>
                <div className="w-max">
                  <CustomLink link={feature.link} className="">
                    <span className="text-brand-600 with-arrow hover:underline">
                      {feature.link.label} <FiArrowRight className="inline" />
                    </span>
                  </CustomLink>
                </div>
              </div>
              {/* Media section */}
              <div className="w-full shadow-lg lg:w-6/12 h-96 rounded-md sm:overflow-hidden">
                {/* Images */}
                {feature.image.mime.startsWith("image") && (
                  <img
                    className="object-cover w-full h-full"
                    src={getStrapiMedia(feature.image.url)}
                    alt="People working on laptops"
                  />
                )}
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

export default FeatureGroup

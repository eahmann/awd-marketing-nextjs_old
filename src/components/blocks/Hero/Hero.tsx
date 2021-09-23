import classNames from "classnames"

import ButtonLink from "@components/shared/ButtonLink"
import NextImage from "@components/shared/NextImage/NextImage"

const Hero = ({
  image,
  title,
  label,
  text,
  buttons,
  marginTop,
  marginBottom,
}) => {
  return (
    <section
      className={classNames({ "mt-20": marginTop }, { "mb-20": marginBottom })}
    >
      <div className="lg:relative">
        <div className="w-full pt-16 mx-auto text-center lg:py-48 max-w-8xl lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">{title}</span>
            </h1>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block text-brand-500 xl:inline">{label}</span>
            </h1>
            <p className="max-w-md mx-auto mt-3 text-lg text-gray-500 sm:text-xl md:mt-5 lg:mx-0">
              {text}
            </p>
            <div className="flex flex-col mt-4 mb-6 lg:mb-0 lg:flex-row">
              {buttons.map((button) => (
                <ButtonLink
                  key={button.id}
                  button={button}
                  className="mt-4 lg:mr-4 lg:last:mr-0 lg:mt-0"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <NextImage media={image} />
        </div>
      </div>
    </section>
  )
}

export default Hero

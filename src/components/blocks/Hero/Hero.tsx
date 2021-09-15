import ButtonLink from "@components/shared/ButtonLink"
import NextImage from "@components/shared/NextImage/NextImage"

const Hero = ({ image, title, label, text, buttons }) => {
  return (
    <main className="lg:relative mb-16">
      <div className="w-full pt-16 pb-20 mx-auto text-center lg:py-48 max-w-8xl lg:text-left">
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
          <div className="flex flex-col mt-4 lg:flex-row">
            {buttons.map((button) => (
              <ButtonLink
                key={button.id}
                button={button}
                className="mt-4 lg:mr-4 lg:mt-0"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <NextImage media={image} />
        {/* <img
          className="absolute inset-0 object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
          alt=""
        /> */}
      </div>
    </main>
  )
}

export default Hero

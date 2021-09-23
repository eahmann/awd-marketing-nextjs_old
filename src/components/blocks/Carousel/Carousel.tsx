import classNames from "classnames"
import Carousel from "react-multi-carousel"

import NextImage from "@components/shared/NextImage/NextImage"

import "react-multi-carousel/lib/styles.css"

const CarouselBlock = ({ title, images, marginTop, marginBottom }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <section
      className={classNames({ "mt-20": marginTop }, { "mb-20": marginBottom })}
    >
      {title && (
        <div className="px-12 pb-5 mx-6 max-w-8xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
        </div>
      )}
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        keyBoardControl={true}
        customTransition="all 0.5s ease"
        transitionDuration={500}
        containerClass="carousel-container mt-6"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {images.map((image) => (
          <div key={image.id} className="h-96">
            <NextImage media={image} />
            {image.caption && (
              <div className="absolute bottom-0 w-full p-2 bg-gray-50 bg-opacity-60">
                {image.caption}
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </section>
  )
}

export default CarouselBlock

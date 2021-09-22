import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import NextImage from "@components/shared/NextImage/NextImage"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

SwiperCore.use([Autoplay, Navigation, Pagination])

const CarouselBlock = ({ title, images }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
    <>
      <div className="mt-20">
        {title && (
          <div className="pb-5 mx-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 leading-6">
              {title}
            </h3>
          </div>
        )}
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
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
      </div>
    </>
  )
}

export default CarouselBlock

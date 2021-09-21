import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import NextImage from "@components/shared/NextImage/NextImage"

SwiperCore.use([Autoplay, Navigation, Pagination])

const Carousel = ({ title, images }) => {
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
        <Swiper
          className="mt-2"
          navigation={true}
          centeredSlides={false}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="h-96">
                <NextImage media={image} />
                {image.caption && (
                  <div className="absolute bottom-0 w-full p-2 bg-gray-50 bg-opacity-60">
                    {image.caption}
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default Carousel

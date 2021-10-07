import { useState } from "react"

import classNames from "classnames"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

import NextImage from "@/components/shared/NextImage"
import { getStrapiMedia } from "@/utils/media"

const ImageGallery = ({ title, images, settings }) => {
  const { marginTop, marginBottom } = settings

  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  // reset array ids for the lightbox
  images.map((image, index) => {
    image.id = index
    return image
  })

  return (
    <section
      className={classNames({ "mt-20": marginTop }, { "mb-20": marginBottom })}
    >
      <div className="mx-auto max-w-7xl">
        {title && (
          <div className="pb-2 mx-6 md:max-w-8xl">
            <h2 className="text-xl font-bold tracking-tight text-gray-800 sm:text-2xl">
              {title}
            </h2>
          </div>
        )}
        <div className="mx-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:mx-6">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => {
                setPhotoIndex(image.id)
                setIsOpen(true)
              }}
              className="relative w-full overflow-hidden shadow-md cursor-pointer rounded-md h-72"
            >
              <NextImage media={image} layout="fill" />
              <span>test</span>
            </div>
          ))}
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={getStrapiMedia(images[photoIndex].url)}
            nextSrc={getStrapiMedia(
              images[(photoIndex + 1) % images.length].url
            )}
            prevSrc={getStrapiMedia(
              images[(photoIndex + images.length - 1) % images.length].url
            )}
            onCloseRequest={() => {
              setIsOpen(false)
            }}
            onMovePrevRequest={() => {
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }}
            onMoveNextRequest={() => {
              setPhotoIndex((photoIndex + 1) % images.length)
            }}
            imageCaption={images[photoIndex].caption}
          />
        )}
      </div>
    </section>
  )
}

export default ImageGallery

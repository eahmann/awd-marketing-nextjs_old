import { NextSeo } from "next-seo"

import { IImage } from "@types/IImage"
import { getStrapiMedia } from "@/utils/media"

type Props = {
  metaTitle: string
  metaDescription: string
  twitterCardType: string
  twitterUsername: string
  shareImage: IImage
  titleSuffix: string
}

const Seo: React.FC<Props> = ({
  metaTitle,
  metaDescription,
  twitterCardType,
  twitterUsername,
  shareImage,
  titleSuffix,
}) => {
  // Prevent errors if no metadata was set
  if (!metaTitle && !metaDescription) return null

  return (
    <NextSeo
      title={metaTitle}
      description={metaDescription}
      openGraph={{
        // Title and description are mandatory
        title: `${metaTitle} | ${titleSuffix}`,
        description: metaDescription,
        // Only include OG image if we have it
        // Careful: if you disable image optimization in Strapi, this will break
        ...(shareImage && {
          images: Object.values(shareImage.formats).map((image: IImage) => {
            return {
              url: getStrapiMedia(image.url),
              width: image.width,
              height: image.height,
            }
          }),
        }),
      }}
      // Only included Twitter data if we have it
      twitter={{
        ...(twitterCardType && { cardType: twitterCardType }),
        // Handle is the twitter username of the content creator
        ...(twitterUsername && { handle: twitterUsername }),
      }}
    />
  )
}

export default Seo

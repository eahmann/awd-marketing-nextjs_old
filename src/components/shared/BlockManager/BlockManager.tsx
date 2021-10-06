import CallToAction from "@/components/blocks/CallToAction"
import CarouselBlock from "@/components/blocks/Carousel/Carousel"
import CenteredTitleAndText from "@/components/blocks/CenteredTitleAndText"
import ContactUsForm from "@/components/blocks/ContactUsForm"
import FAQ from "@/components/blocks/FAQ"
import FeatureGroup from "@/components/blocks/FeatureGroup"
import Hero from "@/components/blocks/Hero"
import ImageGallery from "@/components/blocks/ImageGallery"
import ServiceCardGroup from "@/components/blocks/ServiceCardGroup"

const blockComponents = {
  "blocks.hero": Hero,
  "blocks.carousel": CarouselBlock,
  "blocks.call-to-action": CallToAction,
  "blocks.contact-us-form": ContactUsForm,
  "blocks.service-card-group": ServiceCardGroup,
  "blocks.faq": FAQ,
  "blocks.image-gallery": ImageGallery,
  "blocks.centered-title-and-text": CenteredTitleAndText,
  "blocks.feature-group": FeatureGroup,
}

const getBlockComponent = ({ __component, ...rest }, index) => {
  const Block = blockComponents[__component]

  return Block ? <Block key={`index-${index}`} {...rest} /> : null
}

const BlockManager = ({ blocks }) => {
  return <>{blocks.map(getBlockComponent)}</>
}

export default BlockManager

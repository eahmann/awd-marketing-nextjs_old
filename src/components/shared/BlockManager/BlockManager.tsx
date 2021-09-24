import CallToAction from "@components/blocks/CallToAction"
import CarouselBlock from "@components/blocks/Carousel/Carousel"
import ContactUsForm from "@components/blocks/ContactUsForm"
import FAQ from "@components/blocks/FAQ"
import Hero from "@components/blocks/Hero"
import ServiceCardGroup from "@components/blocks/ServiceCardGroup"

const blockComponents = {
  "blocks.hero-v2": Hero,
  "blocks.carousel": CarouselBlock,
  "blocks.call-to-action": CallToAction,
  "blocks.contact-us-form": ContactUsForm,
  "blocks.service-card-group": ServiceCardGroup,
  "blocks.faq": FAQ,
}

const getBlockComponent = ({ __component, ...rest }, index) => {
  const Block = blockComponents[__component]

  return Block ? <Block key={`index-${index}`} {...rest} /> : null
}

const BlockManager = ({ blocks }) => {
  return <div>{blocks.map(getBlockComponent)}</div>
}

export default BlockManager

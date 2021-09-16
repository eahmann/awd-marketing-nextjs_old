import CallToAction from "@components/blocks/CallToAction"
import Carousel from "@components/blocks/Carousel"
import ContactUsForm from "@components/blocks/ContactUsForm"
import Hero from "@components/blocks/Hero"

const blockComponents = {
  "blocks.hero-v2": Hero,
  "blocks.carousel": Carousel,
  "blocks.call-to-action": CallToAction,
  "blocks.contact-us-form": ContactUsForm,
}

const getBlockComponent = ({ __component, ...rest }, index) => {
  const Block = blockComponents[__component]
  console.log("Found:", __component)

  return Block ? <Block key={`index-${index}`} {...rest} /> : null
}

const BlockManager = ({ blocks }) => {
  return <div>{blocks.map(getBlockComponent)}</div>
}

export default BlockManager

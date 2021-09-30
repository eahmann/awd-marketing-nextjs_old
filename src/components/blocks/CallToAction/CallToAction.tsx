import WideGradient from "./templates/WideGradient"

const templates = {
  wide_gradient: WideGradient,
}

const CallToAction = ({ template, ...rest }) => {
  const Block = templates[template]

  return Block ? <Block {...rest} /> : null
}

export default CallToAction

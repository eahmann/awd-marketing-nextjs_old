import SimpleJustified from "./templates/SimpleJustified"
import WideGradient from "./templates/WideGradient"

const templates = {
  wide_gradient: WideGradient,
  simple_justified: SimpleJustified,
}

const CallToAction = ({ settings, ...rest }) => {
  const Block = templates[settings.template]
  const props = {
    ...rest,
    settings,
  }

  return Block ? <Block {...props} /> : null
}

export default CallToAction

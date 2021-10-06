import classNames from "classnames"

import Heading from "@/components/shared/Heading"
import { EAlignment } from "@/enums/EAlignment"

const CenteredTitleAndText = ({ title, text, settings }) => {
  const { marginTop, marginBottom } = settings

  return (
    <section
      className={classNames({ "mt-20": marginTop }, { "mb-20": marginBottom })}
    >
      <Heading text={text} title={title} alignment={EAlignment["center"]} />
    </section>
  )
}

export default CenteredTitleAndText

import classNames from "classnames"

import Heading from "@/components/shared/Heading"

const CenteredTitleAndText = ({ heading, settings }) => {
  const { marginTop, marginBottom } = settings

  return (
    <section className={classNames("my-8")}>
      <Heading {...heading} />
    </section>
  )
}

export default CenteredTitleAndText

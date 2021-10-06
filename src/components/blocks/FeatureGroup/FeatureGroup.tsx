import Heading from "@/components/shared/Heading"
import { IHeading } from "@/types/IHeading"

interface Props {
  heading: IHeading
}

const FeatureGroup = ({ heading, features, settings }) => {
  return <div>{heading && <Heading {...heading} />}</div>
}

export default FeatureGroup

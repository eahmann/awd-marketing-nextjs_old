import classNames from "classnames"

import { EAlignment } from "@/enums/EAlignment"
import { IHeading } from "@/types/IHeading"

const getAlignment = (alignment) => {
  if (alignment === EAlignment.center) {
    return "text-center"
  } else if (alignment === EAlignment.right) {
    return "text-right"
  } else if (alignment === EAlignment.left) {
    return "text-left"
  }
}

const Heading: React.FC<IHeading> = ({ title, text, label, alignment }) => {
  return (
    <div
      className={classNames(
        "mx-auto max-w-sm sm:max-w-7xl px-8",
        getAlignment(alignment)
      )}
    >
      {label && (
        <h2 className="text-base font-semibold tracking-wide uppercase text-brand-500">
          {label}
        </h2>
      )}
      <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 leading-8 sm:text-4xl">
        {title}
      </p>
      {text && <p className="mt-4 text-lg text-gray-500 leading-6">{text}</p>}
    </div>
  )
}

export default Heading

import classNames from "classnames"

import { IButtonLink } from "@models/IButtonLink"

import CustomLink from "../CustomLink"

interface Props {
  button: IButtonLink
  className?: string
}

function getButtonAppearance(theme, outline) {
  if (theme === "primary") {
    if (outline) {
      return "primary-outline"
    }
    return "primary"
  }
  if (theme === "brand") {
    if (outline) {
      return "brand-outline"
    }
    return "brand"
  }
  if (theme === "secondary") {
    if (outline) {
      return "secondary-outline"
    }
    return "secondary"
  }
  if (theme === "muted") {
    if (outline) {
      return "muted-outline"
    }
    return "muted"
  }
}

const ButtonLink: React.FC<Props> = ({ button, className }) => {
  const { theme, outline, shadow, label } = button
  const appearance = getButtonAppearance(theme, outline)

  return (
    <CustomLink link={button} className={classNames(" text-center", className)}>
      <div
        className={classNames(
          "border-2 px-6 py-3 text-base font-medium rounded-md w-full ",
          {
            "shadow-xl": shadow,
          },
          {
            "shadow-none": !shadow,
          },
          {
            "border-transparent bg-primary-500 text-white text-opacity-90 hover:text-opacity-100 hover:bg-primary-400":
              appearance === "primary",
          },
          {
            "border-primary-500 bg-transparent text-primary-800 hover:bg-primary-50":
              appearance === "primary-outline",
          },
          {
            "border-transparent bg-secondary-500 text-white text-opacity-90 hover:text-opacity-100 hover:bg-secondary-400":
              appearance === "secondary",
          },
          {
            "border-secondary-500 bg-transparent text-secondary-800 hover:bg-secondary-50":
              appearance === "secondary-outline",
          },
          {
            "border-transparent bg-brand-500 text-white text-opacity-90 hover:text-opacity-100 hover:bg-brand-400":
              appearance === "brand",
          },
          {
            "border-brand-500 bg-transparent text-brand-800 hover:bg-brand-25":
              appearance === "brand-outline",
          },
          {
            "border-transparent bg-gray-50 text-gray-800 text-opacity-90 hover:text-opacity-100 hover:bg-gray-200":
              appearance === "muted",
          },
          {
            "border border-gray-50 bg-transparent text-gray-800 hover:bg-gray-100":
              appearance === "muted-outline",
          }
        )}
      >
        {label}
      </div>
    </CustomLink>
  )
}

export default ButtonLink

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
          "px-6 py-3 text-base font-medium rounded-md w-full ",
          {
            "shadow-xl": shadow,
          },
          {
            "shadow-none": !shadow,
          },
          {
            "bg-primary-500 text-white text-opacity-90 hover:text-opacity-100 hover:bg-primary-400":
              appearance === "primary",
          },
          {
            "ring-2 ring-primary-500 bg-gray-50 text-primary-800 hover:bg-primary-25":
              appearance === "primary-outline",
          },
          {
            "bg-secondary-500 text-white text-opacity-90 hover:text-opacity-100 hover:bg-secondary-400":
              appearance === "secondary",
          },
          {
            "ring-2 ring-secondary-500 bg-gray-50 text-secondary-800 hover:bg-secondary-25":
              appearance === "secondary-outline",
          },
          {
            "ring-2 ring-brand-500 bg-brand-500 text-white text-opacity-90 hover:text-opacity-100 hover:bg-brand-400 hover:ring-brand-400":
              appearance === "brand",
          },
          {
            "ring-2 ring-brand-500 bg-gray-50 text-brand-800 text-opacity-90 hover:text-opacity-100 hover:bg-brand-25":
              appearance === "brand-outline",
          },
          {
            "bg-gray-50 text-gray-800 hover:bg-gray-200":
              appearance === "muted",
          },
          {
            "ring-2 ring-gray-500 bg-gray-50 text-gray-800 hover:bg-gray-200":
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

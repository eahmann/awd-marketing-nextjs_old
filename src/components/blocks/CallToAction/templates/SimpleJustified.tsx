import classNames from "classnames"

import ButtonLink from "@components/shared/ButtonLink"

const getBackgroundColor = (theme) => {
  if (theme === "muted") {
    return "bg-gray-100"
  } else {
    return `bg-${theme}-700`
  }
}

const getTitleColor = (theme) => {
  if (theme === "muted") {
    return "text-gray-900"
  } else {
    return "text-white"
  }
}

const getTextColor = (theme) => {
  if (theme === "muted") {
    return "text-gray-700"
  } else {
    return `text-${theme}-50`
  }
}

const SimpleJustified = ({
  title,
  text,
  buttons,
  theme,
  marginTop,
  marginBottom,
}) => {
  return (
    <section
      className={classNames({ "mt-20": marginTop }, { "mb-20": marginBottom })}
    >
      <div className={getBackgroundColor(theme)}>
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className={classNames("block", getTitleColor(theme))}>
              {title}
            </span>
            {text && (
              <span
                className={classNames("block text-2xl", getTextColor(theme))}
              >
                {text}
              </span>
            )}
          </h2>
          <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
            {buttons.map((button) => (
              <ButtonLink
                key={button.id}
                button={button}
                className="mt-4 lg:mr-4 lg:last:mr-0 lg:mt-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SimpleJustified

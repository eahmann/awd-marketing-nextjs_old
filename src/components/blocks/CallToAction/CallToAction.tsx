import ButtonLink from "@components/shared/ButtonLink"

function getBackgroundColor(theme) {
  if (theme === "muted") {
    return "bg-white"
  } else {
    return `bg-${theme}-600`
  }
}

function getTitleColor(theme) {
  if (theme === "muted") {
    return "text-gray-900"
  } else {
    return "text-white"
  }
}

function getTextColor(theme) {
  if (theme === "muted") {
    return "text-gray-800"
  } else {
    return `text-${theme}-50`
  }
}

const CallToAction = ({ title, text, buttons, theme }) => {
  return (
    <div className={getBackgroundColor(theme) + " mt-20"}>
      <div className="max-w-3xl px-4 py-16 mx-auto text-center sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className={getTitleColor(theme) + " block"}>{title}</span>
          <span className="block"></span>
        </h2>
        <p
          className={
            getTextColor(theme) + " mt-4 text-lg text-${theme}-50 leading-6"
          }
        >
          {text}
        </p>
        <div className="flex flex-col justify-center mt-4 lg:flex-row">
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
  )
}

export default CallToAction

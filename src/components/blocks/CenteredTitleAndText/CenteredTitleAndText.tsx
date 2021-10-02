import classNames from "classnames"

const CenteredTitleAndText = ({ title, text, settings }) => {
  const { marginTop, marginBottom } = settings

  return (
    <section
      className={classNames({ "mt-20": marginTop }, { "mb-20": marginBottom })}
    >
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>
        {text && <p className="mt-4 text-lg text-gray-500 leading-6">{text}</p>}
      </div>
    </section>
  )
}

export default CenteredTitleAndText

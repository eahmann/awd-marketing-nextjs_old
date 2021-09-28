const CenteredTitleAndText = ({ title, text }) => {
  return (
    <section className="py-12 sm:py-16">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>
        {text && <p className="mt-4 text-lg text-gray-500 leading-6">{text}</p>}
      </div>
    </section>
  )
}

export default CenteredTitleAndText

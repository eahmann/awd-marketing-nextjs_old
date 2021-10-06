import { IHeading } from "@/types/IHeading"

const Heading: React.FC<IHeading> = ({ title, text, alignment }) => {

  return (
    <div className="mx-auto text-center max-w-7xl">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-lg text-gray-500 leading-6">{text}</p>}
    </div>
  )
}

export default Heading

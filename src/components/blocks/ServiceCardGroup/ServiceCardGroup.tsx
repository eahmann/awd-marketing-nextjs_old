import NextImage from "@components/shared/NextImage"

const ServiceCardGroup = ({ title, cards }) => {
  return (
    <div className="bg-white">
      <div className="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:pb-16">
        <div className="space-y-12">
          <ul
            role="list"
            className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
          >
            {cards.map((card) => (
              <li key={card.id}>
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                  <div className="overflow-hidden rounded-lg shadow-lg h-72 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                    <NextImage
                      media={card.image}
                      layout="fill"
                      alt={card.image.alt}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="text-lg font-medium leading-6 space-y-1">
                        <h3>{card.title}</h3>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">{card.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ServiceCardGroup

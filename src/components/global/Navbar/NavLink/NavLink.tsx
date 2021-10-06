import CustomLink from "@/components/shared/CustomLink"
import { INavItem } from "@/types/INavItem"

type Props = {
  data: INavItem
  className?: string
  menuState?: any
  closeHook?: any
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const NavLink: React.FC<Props> = ({
  data,
  className,
  menuState,
  closeHook,
}) => {
  return (
    <CustomLink
      link={data}
      className="rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
    >
      <button
        tabIndex={-1}
        className={classNames(
          "font-medium text-gray-500 md:text-base hover:text-gray-900 px-2 md:px-0 focus:ring-2 focus:ring-offset-2 focus:ring-brand-500",
          className
        )}
      >
        {data.label}
      </button>
    </CustomLink>
  )
}

export default NavLink

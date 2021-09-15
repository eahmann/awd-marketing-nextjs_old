import { INavItem } from "@models/INavItem"

import NavLink from "../NavLink"
import NavPopover from "../NavPopover"

type ItemProps = {
  itemData: INavItem
}

// Display a nav item
const Item: React.FC<ItemProps> = ({ itemData }) => {
  // Get the element
  const NavElement: typeof NavPopover | typeof NavLink =
    itemData.children.length > 0 ? NavPopover : NavLink

  if (!NavElement) {
    return null
  }

  // Render the nav item
  return <NavElement data={itemData} />
}

const NavItem = ({ navItem, ...rest }) => {
  return (
    <>
      <Item itemData={navItem} />
    </>
  )
}

export default NavItem

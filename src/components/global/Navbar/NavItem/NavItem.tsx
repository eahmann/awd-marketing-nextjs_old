import { INavItem } from "@models/INavItem"

import NavLink from "../NavLink"
import NavPopover from "../NavPopover"

type ItemProps = {
  itemData: INavItem
  className?: string
  menuState?: any
  closeHook?: any
}

// Display a nav item
const Item: React.FC<ItemProps> = ({
  itemData,
  className,
  menuState = "",
  closeHook = "",
}) => {
  // Get the element
  const NavElement: typeof NavPopover | typeof NavLink =
    itemData.children.length > 0 ? NavPopover : NavLink

  if (!NavElement) {
    return null
  }

  // Render the nav item
  return (
    <NavElement
      data={itemData}
      className={className}
      menuState={menuState}
      closeHook={closeHook}
    />
  )
}

const NavItem: React.FC<ItemProps> = ({
  itemData,
  className,
  menuState,
  closeHook,
}) => {
  return (
    <>
      <Item
        itemData={itemData}
        className={className}
        menuState={menuState}
        closeHook={closeHook}
      />
    </>
  )
}

export default NavItem

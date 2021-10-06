import { IButtonLink } from "./IButtonLink"
import { IImage } from "./IImage"
import { INavItem } from "./INavItem"

export interface INavbar {
  logo: IImage
  items: Array<INavItem>
  buttons: Array<IButtonLink>
}

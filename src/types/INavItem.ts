import { ILink } from "./ILink"

export interface INavItem extends ILink {
  children?: Array<ILink>
}

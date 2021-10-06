import { INavbar } from "./INavbar"

export interface IGlobal {
  id: number
  locale: string
  created_at: string
  updated_at: string
  navbar: INavbar
}

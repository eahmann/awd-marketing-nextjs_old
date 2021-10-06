import { ISeo } from "./ISeo"

export interface IPage {
  id: number
  title: string
  slug: string
  publish_at: string
  ready: boolean
  locale: string
  published_at: string
  created_at: string
  updated_at: string
  seo: ISeo
  blocks: any
  localizations: any
}

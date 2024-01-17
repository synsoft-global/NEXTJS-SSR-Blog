export type TNav = {
  LINKS: TNavItem[]
  LEGALS: TNavItem[]
}


export type TNavItem = {
  label: string
  link: string
}


export type TSocialMediaLink = {
  link: string
  children: React.ReactNode
}
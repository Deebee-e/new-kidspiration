export type SideNavItem = {
  title: string
  path: string
  icon?: React.ReactElement
  submenu?: boolean
  submenuItems?: SideNavItem[]
}

export type MenuItemWithSubMenuProps = {
  item: SideNavItem
  toggleOpen: () => void
}

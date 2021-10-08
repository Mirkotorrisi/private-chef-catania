export interface MenuItemI {
  name: string;
  image: string;
  description: string;
}

export interface MenuProps {
  background: string;
  menu: MenuItemI[];
}

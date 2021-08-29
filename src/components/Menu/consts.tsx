export interface MenuItemI {
  name: string;
  image: string;
  description: string;
}

export interface MenuProps {
  menu: {
    appetizer: MenuItemI[];
    antipasti: MenuItemI[];
    primi: MenuItemI[];
    secondi: MenuItemI[];
  };
}

export interface MenuItemProps {
  menuItem: MenuItemI;
  backgroundImage: string;
}

export interface MenuTab {
  id: number;
  name: string;
}

export interface MenuCategory {
  id: number;
  name: string;
  menuId: number;
}

export interface DishVariant {
  id: number;
  price: number;
  stopList: boolean;
  active: boolean;
}

export interface Dish {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  thumbnailUrl?: string;
  categoryId: number;
  menuId: number;
  minPrice: number;
  maxPrice: number;
  dishVariants: DishVariant[];
  active: boolean;
}

export interface MenuData {
  emptyDishImage: string;
  menus: MenuTab[];
  categories: MenuCategory[];
  dishes: Dish[];
}

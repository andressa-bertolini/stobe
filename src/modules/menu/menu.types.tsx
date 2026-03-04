export type MenuItem = {
  id: number,
  image: string,
  name: string,
  packSize: string,
  quantity: number,
  price: number,
}

export type MenuState = {
  menu: MenuItem[];
  loading: {
    list: boolean;
  };
  currentPage: number;
  totalPages: number;
  totalItems: number;
  error: string | null;
}
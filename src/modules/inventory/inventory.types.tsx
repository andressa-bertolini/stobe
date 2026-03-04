export type Item = {
  id: number;
  image: string;
  name: string;
  supplier: string;
  packSize: {
    quantity: number;
    unit: number;
  };
  inStock: number;
  price: number;
}

export type InventoryState = {
  inventory: Item[];
  loading: {
    list: boolean;
  };
  currentPage: number;
  totalPages: number;
  totalItems: number;
  error: string | null;
}
export type StockStatus = 'outOfStock' | 'lowStock' | 'inStock';

const getStockStatus = (
  inStock: number,
  minStock: number
): StockStatus => {
  if (inStock === 0) return 'outOfStock';
  if (inStock <= minStock) return 'lowStock';
  return 'inStock';
};

export default getStockStatus;
type Props = {
  status: 'outOfStock' | 'lowStock' | 'inStock';
};

export function StockIndicator({ status }: Props) {

  const stockStatusColor = {
    outOfStock: '#a70808',
    lowStock: '#b8960c',
    inStock: '#1a783d',
  };

  const stockStatusText = {
    outOfStock: 'out of stock',
    lowStock: 'low stock',
    inStock: 'in stock',
  };

  return (
    <>
      <span
        style={{
          display: 'inline-block',
          width: 10,
          height: 10,
          borderRadius: '50%',
          backgroundColor: stockStatusColor[status],
        }}
      />
      <span 
        style={{
          marginLeft: '4px'
        }}
      >{stockStatusText[status]}</span>
    </>
  );
}
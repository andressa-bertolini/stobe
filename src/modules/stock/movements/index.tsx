import MainLayout from '@/layouts/MainLayout';
import styles from '@/styles/global.module.scss';
import Coffee from '@/assets/images/products/coffee.png'

const StockMovements = () => {  

  return (
    <MainLayout>
      <h1 className={`${styles.title}`}>Stock Movements</h1>
    </MainLayout>
  );
};

export default StockMovements;
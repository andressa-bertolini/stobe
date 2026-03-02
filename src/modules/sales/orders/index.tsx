import MainLayout from '@/layouts/MainLayout';
import styles from '@/styles/global.module.scss';

const salesOrders = () => {  

  return (
    <MainLayout>
      <h1 className={styles.title}>Sales Orders</h1>
    </MainLayout>
  );
};

export default salesOrders;
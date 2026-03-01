import MainLayout from '@/layouts/MainLayout';
import styles from '@/styles/global.module.scss';
import Coffee from '@/assets/images/products/coffee.png'

const StockProducts = () => {  

  return (
    <MainLayout>
      <h1 className={`${styles.title}`}>Stock Products</h1>
      <table className={`${styles.table}`}>
        <tr>
          <th colSpan={2}>Item</th>
          <th>Description</th>
          <th>Quantity</th>
        </tr>
        <tr>
          <td><img src={Coffee}/></td>
          <td>Coffee sack</td>
          <td>bla bla</td>
          <td>3</td>
        </tr>
      </table>
    </MainLayout>
  );
};

export default StockProducts;
import MainLayout from '@/layouts/MainLayout';

const Home = () => {  
  return (
    <MainLayout>
      <h1>Products</h1>
      <table>
        <tr>
          <th>Item</th>
          <th>Description</th>
          <th>Quantity</th>
        </tr>
        <tr>
          <td>Coffee sack</td>
          <td>bla bla</td>
          <td>3</td>
        </tr>
      </table>
    </MainLayout>
  );
};

export default Home;
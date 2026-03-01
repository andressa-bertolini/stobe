import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '@/routes/PrivateRoutes';
import SalesOrders from './index.tsx';

const SalesOrdersRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute><SalesOrders /></PrivateRoute>} />
    </Routes>
  );
};

export default SalesOrdersRoutes;
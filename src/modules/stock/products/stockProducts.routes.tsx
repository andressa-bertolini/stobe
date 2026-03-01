import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '@/routes/PrivateRoutes';
import StockProducts from './index.tsx';

const StockProductsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute><StockProducts /></PrivateRoute>} />
    </Routes>
  );
};

export default StockProductsRoutes;
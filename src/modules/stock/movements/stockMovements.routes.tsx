import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '@/routes/PrivateRoutes';
import StockMovements from './index.tsx';

const StockMovementsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute><StockMovements /></PrivateRoute>} />
    </Routes>
  );
};

export default StockMovementsRoutes;
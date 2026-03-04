import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '@/routes/PrivateRoutes';
import Inventory from './index.tsx';

const InventoryRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute><Inventory /></PrivateRoute>} />
    </Routes>
  );
};

export default InventoryRoutes;
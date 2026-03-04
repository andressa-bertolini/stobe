import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '@/routes/PrivateRoutes';
import Menu from './index.tsx';

const MenuRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute><Menu /></PrivateRoute>} />
    </Routes>
  );
};

export default MenuRoutes;
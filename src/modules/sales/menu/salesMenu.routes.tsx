import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '@/routes/PrivateRoutes';
import SalesMenu from './index.tsx';

const SalesMenuRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute><SalesMenu /></PrivateRoute>} />
    </Routes>
  );
};

export default SalesMenuRoutes;
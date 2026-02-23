import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '@/routes/PrivateRoutes';
import HomePage from './index.tsx';

const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
    </Routes>
  );
};

export default HomeRoutes;
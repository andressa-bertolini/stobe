import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '@/routes/PrivateRoutes';

import HomeRoutes from '@/pages/home/HomeRoutes';

const AppRoutes = () => {

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <HomeRoutes />
          </PrivateRoute>
        }
      />
    </Routes>
    );
  };
  
  export default AppRoutes;
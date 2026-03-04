import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '@/routes/PrivateRoutes';

import HomeRoutes from '@/modules/home/home.routes';
import LoginRoutes from '@/modules/login/login.routes';
import InventoryRoutes from '@/modules/inventory/inventory.routes';
import MenuRoutes from '@/modules/menu/menu.routes';

const AppRoutes = () => {

  return (
    <Routes>
      <Route
        path="/:branchId/*"
        element={
          <PrivateRoute>
            <InventoryRoutes />
          </PrivateRoute>
        }
      />
      <Route
        path="/login/:branchId"
        element={
          <PrivateRoute>
            <LoginRoutes />
          </PrivateRoute>
        }
      />
      <Route
        path="/inventory/:branchId"
        element={
          <PrivateRoute>
            <InventoryRoutes />
          </PrivateRoute>
        }
      />
      <Route
        path="/menu/:branchId"
        element={
          <PrivateRoute>
            <MenuRoutes />
          </PrivateRoute>
        }
      />
      <Route
        path="*"
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
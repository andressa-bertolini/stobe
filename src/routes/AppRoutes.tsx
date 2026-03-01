import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '@/routes/PrivateRoutes';

import HomeRoutes from '@/modules/home/home.routes';
import LoginRoutes from '@/modules/login/login.routes';
import StockProductsRoutes from '@/modules/stock/products/stockProducts.routes';
import StockMovementsRoutes from '@/modules/stock/movements/stockMovements.routes';
import SalesMenuRoutes from '@/modules/sales/menu/salesMenu.routes';
import SalesOrdersRoutes from '@/modules/sales/orders/salesOrders.routes';

const AppRoutes = () => {

  return (
    <Routes>
      <Route
        path="/:branchId/*"
        element={
          <PrivateRoute>
            <HomeRoutes />
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
        path="/stock/products/:branchId"
        element={
          <PrivateRoute>
            <StockProductsRoutes />
          </PrivateRoute>
        }
      />
      <Route
        path="/stock/movements/:branchId"
        element={
          <PrivateRoute>
            <StockMovementsRoutes />
          </PrivateRoute>
        }
      />
      <Route
        path="/sales/menu/:branchId"
        element={
          <PrivateRoute>
            <SalesMenuRoutes />
          </PrivateRoute>
        }
      />
      <Route
        path="/sales/orders/:branchId"
        element={
          <PrivateRoute>
            <SalesOrdersRoutes />
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
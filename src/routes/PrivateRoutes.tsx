import { useParams, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { ReactNode } from "react";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { branchId } = useParams();
  // const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
  const firstBranch = useSelector((state: RootState) => state.user.user?.branches?.[0]);

  // if (!isAuthenticated) {
  //   return <Navigate to="/login" replace />;
  // }

  if (!branchId && firstBranch) {
    return <Navigate to={`/${firstBranch}`} replace />;
  }

  return children;
};

export default PrivateRoute;

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  //const { token } = useSelector((state: RootState) => state.auth);
  //const location = useLocation();

  // if (!token) {
  //   return <Navigate to="/login" state={{ from: location }} replace />;
  // }

  return <>{children}</>;
};

export default PrivateRoute;

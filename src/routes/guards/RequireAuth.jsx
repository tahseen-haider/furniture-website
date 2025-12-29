import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthLoader } from '@components';

const RequireAuth = () => {
  const { isLoggedIn, authLoading } = useSelector((s) => s.user);
  const location = useLocation();

  if (authLoading) return <AuthLoader />;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
};

export default RequireAuth;

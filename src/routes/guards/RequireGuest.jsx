import { AuthLoader } from '@components';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const RequireGuest = () => {
  const { isLoggedIn, authLoading } = useSelector((s) => s.user);

  if (authLoading) return <AuthLoader />;

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default RequireGuest;

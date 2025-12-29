import { AuthLoader } from '@components';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const RequireRole = ({ allowedRoles }) => {
  const { userInfo, authLoading } = useSelector((s) => s.user);

  if (authLoading) return <AuthLoader />;

  if (!userInfo || !allowedRoles.includes(userInfo.role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default RequireRole;

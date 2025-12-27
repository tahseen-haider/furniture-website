import { useSelector } from 'react-redux';
import { HeaderProfileBtn, HeaderAuthBtn, Spinner } from '@components';

const UserHeaderBtn = () => {
  const { isLoggedIn, authLoading } = useSelector((state) => state.user);

  if (authLoading) return <Spinner />;

  if (!isLoggedIn) return <HeaderAuthBtn />;
  return <HeaderProfileBtn />;
};

export default UserHeaderBtn;

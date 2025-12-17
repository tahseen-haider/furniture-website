import { useSelector } from 'react-redux';

const UserHeaderBtn = () => {
  const { isLoggedIn } = useSelector((state) => state.user);

  if (!isLoggedIn) return <div>Btn</div>;
  return <div>UserBtn</div>;
};

export default UserHeaderBtn;

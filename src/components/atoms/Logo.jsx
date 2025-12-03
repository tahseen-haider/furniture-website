import { Link } from 'react-router-dom';
import { Heading } from '@components';

const Logo = () => {
  return (
    <Link to="/">
      <div className="text-(--color-brand-primary) font-semibold text-4xl">Furniture</div>
    </Link>
  );
};

export default Logo;

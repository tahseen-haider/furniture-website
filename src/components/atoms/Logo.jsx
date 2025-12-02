import { Link } from 'react-router-dom';
import { Heading } from '@components';

const Logo = () => {
  return (
    <Link to="/">
      <Heading level={1} className="text-(--color-brand-primary)" variant="secondary">
        Furniture
      </Heading>
    </Link>
  );
};

export default Logo;

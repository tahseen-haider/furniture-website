import { Link } from 'react-router-dom';
import { Heading } from '@components';

const Logo = () => {
  return (
    <Link to="/">
      <Heading level={1} className="text-(--text-primary)" variant="secondary">
        Furniture
      </Heading>
    </Link>
  );
};

export default Logo;

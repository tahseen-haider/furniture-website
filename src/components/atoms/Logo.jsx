import { Link } from 'react-router-dom';
import { Tooltip } from '@components';

const Logo = () => {
  return (
    <Tooltip text="Home">
      <Link to="/">
        <div className="text-(--color-brand-primary) font-semibold text-2xl sm:text-4xl">
          Furniture
        </div>
      </Link>
    </Tooltip>
  );
};

export default Logo;

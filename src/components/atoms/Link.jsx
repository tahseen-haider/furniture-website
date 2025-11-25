import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

const Link = ({ to, children, className = '', ...props }) => {
  return (
    <RouterLink to={to} className={`font-semibold text-[14px] ${className}`} {...props}>
      {children}
    </RouterLink>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Link.defaultProps = {
  className: '',
};

export default Link;

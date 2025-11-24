import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

function Link({ to, children, className = '', ...props }) {
  return (
    <RouterLink to={to} className={`font-semibold text-[14px] ${className}`} {...props}>
      {children}
    </RouterLink>
  );
}

Link.propTypes = {
  to: PropTypes.string.isRequired, // destination path is required
  children: PropTypes.node.isRequired, // anything renderable inside the link
  className: PropTypes.string, // optional additional CSS classes
};

Link.defaultProps = {
  className: '',
};

export default Link;

import PropTypes from 'prop-types';

const Button = ({ children, className = '', rounded = false, ...props }) => {
  return (
    <button
      className={`cursor-pointer px-12 min-h-16 ${
        rounded ? 'rounded-full' : 'rounded'
      } text-lg font-bold bg-(--color-brand-primary) max-w-fit ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  rounded: PropTypes.bool,
};

export default Button;

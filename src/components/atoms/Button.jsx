import PropTypes from 'prop-types';

const Button = ({ children, className = '', rounded = false, secondary = false, ...props }) => {
  return (
    <button
      className={`cursor-pointer px-12 ${rounded ? 'rounded-full' : 'rounded'}
      ${
        secondary
          ? 'text-base font-normal max-w-none bg-(--color-brand-secondary) min-h-11'
          : 'text-lg font-bold bg-(--color-brand-primary) max-w-fit min-h-16'
      } text-white 
        ${className}`}
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

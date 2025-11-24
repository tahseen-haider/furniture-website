import PropTypes from 'prop-types';

function Button({ children, className = '', rounded = false, ...props }) {
  return (
    <button
      className={`cursor-pointer px-12 min-h-[68px] ${rounded ? 'rounded-full' : 'rounded-[3px]'} text-[16px] font-bold bg-(--color-bg-primary) max-w-fit ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired, // anything that can be rendered inside button
  className: PropTypes.string, // optional additional classes
  rounded: PropTypes.bool, // optional, true for fully rounded button
};

Button.defaultProps = {
  className: '',
  rounded: false,
};

export default Button;

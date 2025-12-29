import PropTypes from 'prop-types';

const Button = ({
  children,
  className = '',
  rounded = false,
  type = 'button',
  secondary = false,
  tertiary = false,
  disable = false,
  ...props
}) => {
  let baseClasses = `cursor-pointer transition-colors text-white duration-300 ${rounded ? 'rounded-full' : 'rounded-lg'}`;
  let styleClasses = '';

  if (disable) {
    styleClasses = `bg-gray-300 text-gray-500 ${tertiary ? 'px-3 py-2 flex items-center gap-2 max-h-fit' : secondary ? 'max-w-none min-h-11' : 'text-lg font-semibold max-w-fit min-h-16 px-12'}`;
  } else if (tertiary) {
    styleClasses = 'bg-blue-500 text-white px-3 py-2 flex items-center gap-2 max-h-fit';
  } else if (secondary) {
    styleClasses = 'bg-[var(--color-brand-secondary)] text-base font-normal max-w-none min-h-11';
  } else {
    styleClasses = 'bg-[var(--color-brand-primary)] text-lg font-semibold max-w-fit min-h-16 px-12';
  }

  return (
    <button
      disabled={disable}
      type={type}
      className={`${baseClasses} ${styleClasses} ${className}`}
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
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  disable: PropTypes.bool,
};

export default Button;

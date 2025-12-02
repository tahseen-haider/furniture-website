import PropTypes from 'prop-types';

const underlineOrigin = {
  left: 'origin-left',
  center: 'origin-center',
  right: 'origin-right',
};

const Underline = ({ direction = 'left', thickness = '1px', className = '' }) => {
  return (
    <span
      className={`
        absolute left-0 -bottom-1 w-full bg-current
        scale-x-0 transition-all duration-300
        group-hover:scale-x-100  opacity-10 group-hover:opacity-100
        ${underlineOrigin[direction]}
        ${className}
      `}
      style={{ height: thickness }}
    />
  );
};

Underline.propTypes = {
  direction: PropTypes.oneOf(['left', 'center', 'right']),
  thickness: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

export default Underline;

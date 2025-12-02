import PropTypes from 'prop-types';

const Input = ({ className = '', ...props }) => {
  return <input className={`flex-1 h-full max-h-[70px] px-2 bg-white ${className}`} {...props} />;
};

Input.propTypes = {
  className: PropTypes.string,
};

export default Input;

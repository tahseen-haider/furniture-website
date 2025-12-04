import PropTypes from 'prop-types';

const Input = ({ className = '', ...props }) => {
  return <input className={`flex-1 h-full max-h-16 px-4 bg-white ${className}`} {...props} />;
};

Input.propTypes = {
  className: PropTypes.string,
};

export default Input;

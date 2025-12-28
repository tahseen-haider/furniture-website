import PropTypes from 'prop-types';

const Icon = ({ src, alt, className = '', size, ...props }) => {
  return <img src={src} alt={alt} className={`w-${size} h-${size} ${className}`} {...props} />;
};

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon;

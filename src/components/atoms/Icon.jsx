import PropTypes from 'prop-types';

function Icon({ src, alt, className = '' }) {
  return <img src={src} alt={alt} className={className} />;
}

Icon.propTypes = {
  src: PropTypes.string.isRequired, // image source URL is required
  alt: PropTypes.string.isRequired, // alt text is required for accessibility
  className: PropTypes.string, // optional additional CSS classes
};

Icon.defaultProps = {
  className: '',
};

export default Icon;

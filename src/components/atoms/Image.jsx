import PropTypes from 'prop-types';

function Image({ src, alt, className = '' }) {
  return <img src={src} alt={alt} className={className} />;
}

Image.propTypes = {
  src: PropTypes.string.isRequired, // required image source URL
  alt: PropTypes.string.isRequired, // required alt text for accessibility
  className: PropTypes.string, // optional additional CSS classes
};

Image.defaultProps = {
  className: '',
};

export default Image;

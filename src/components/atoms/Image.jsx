import PropTypes from 'prop-types';
import { useState } from 'react';

const Image = ({ src, alt, className = '', ...props }) => {
  const [fallback, setFallback] = useState(false);

  return (
    <img
      {...props}
      src={fallback ? '/images/placeholder.jpg' : src}
      alt={alt}
      className={`${className} object-cover`}
      onError={() => setFallback(true)}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Image;

import PropTypes from 'prop-types';
import { useState } from 'react';

const Image = ({ src, alt, className = '' }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc || '/images/placeholder.jpg'}
      alt={alt}
      className={className}
      onError={() => {
        setImgSrc('/images/placeholder.jpg');
      }}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Image;

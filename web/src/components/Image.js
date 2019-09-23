import React from 'react';
import PropTypes from 'prop-types';
import { imageUrlFor } from '../lib/image-url';
import { buildImageObj } from '../lib/helpers';

function getImageSize(aspectRatio) {
  if (aspectRatio === '1:1') return { width: 1024, height: 1024 };
  else if (aspectRatio === '2:1') return { width: 2048, height: 1024 };
  else return { width: 1380, height: 1024 }; // 3:2
}

const Image = ({ image, alt, aspectRatio }) => {
  const { width, height } = getImageSize(aspectRatio);

  return (
    <img
      src={imageUrlFor(buildImageObj(image))
        .width(width)
        .height(height)}
      alt={alt}
      className="w-full"
    />
  );
};

Image.defaultProps = {
  aspectRatio: '3:2'
};

Image.propTypes = {
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _id: PropTypes.string,
      _ref: PropTypes.string
    }).isRequired,
    crop: PropTypes.object,
    hotspot: PropTypes.object
  }).isRequired,
  alt: PropTypes.string.isRequired,
  aspectRatio: PropTypes.oneOf(['1:1', '3:2', '2:1'])
};

export default Image;

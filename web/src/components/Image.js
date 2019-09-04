import React from 'react';
import PropTypes from 'prop-types';
import { imageUrlFor } from '../lib/image-url';
import { buildImageObj } from '../lib/helpers';

const Image = ({ image, alt, aspectRatio }) => {
  let width = 1380;
  let height = 1024;
  switch (aspectRatio) {
    case '1:1':
      width = 1024;
      height = 1204;
      break;
    case '2:1':
      width = 2048;
      height = 1024;
      break;
    default:
      width = 1380;
      height = 1024;
      break;
  }
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
  image: PropTypes.object,
  alt: PropTypes.string,
  aspectRatio: PropTypes.oneOf(['1:1', '3:2', '2:1'])
};

export default Image;

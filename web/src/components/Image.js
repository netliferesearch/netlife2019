import React from 'react';
import PropTypes, { string } from 'prop-types';
import { imageUrlFor } from '../lib/image-url';
import { buildImageObj } from '../lib/helpers';

const Image = ({ image, alt, square }) => (
  <img
    src={imageUrlFor(buildImageObj(image))
      .width(square ? 1024 : 1380)
      .height(square ? 1024 : 920)}
    alt={alt}
    className="w-full"
  />
);

Image.propTypes = {
  image: PropTypes.object,
  alt: PropTypes.string,
  square: PropTypes.bool
};

export default Image;

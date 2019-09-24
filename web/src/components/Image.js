import React from 'react';
import PropTypes from 'prop-types';
import { imageUrlFor } from '../lib/image-url';
import { buildImageObj } from '../lib/helpers';

function shrink(image, shrinkImage) {
  return {
    width: parseInt(image.width * shrinkImage),
    height: parseInt(image.height * shrinkImage)
  };
}

function imageSize(aspectRatio, shrinkImage) {
  if (aspectRatio === '1:1') {
    return shrink({ width: 1024, height: 1024 }, shrinkImage);
  } else if (aspectRatio === '2:1') {
    return shrink({ width: 2048, height: 1024 }, shrinkImage);
  } else {
    return shrink({ width: 1380, height: 1024 }, shrinkImage); // 3:2
  }
}

const Image = ({ image, alt, aspectRatio, shrinkImage }) => {
  return (
    <picture>
      <source
        type="image/webp"
        // 1008 = 56rem = xl breakpoint in Tailwind
        media="(min-width: 1008px)"
        srcSet={imageUrlFor(buildImageObj(image))
          .width(imageSize(aspectRatio, shrinkImage).width)
          .height(imageSize(aspectRatio, shrinkImage).height)
          .format('webp')
          .quality(80)}
      />
      <source
        // 1008 = 56rem = xl breakpoint in Tailwind
        media="(min-width: 1008px)"
        srcSet={imageUrlFor(buildImageObj(image))
          .width(imageSize(aspectRatio, shrinkImage).width)
          .height(imageSize(aspectRatio, shrinkImage).height)
          .format('jpg')}
      />
      <img
        srcSet={imageUrlFor(buildImageObj(image))
          .width(imageSize(aspectRatio, shrinkImage).width / 2)
          .height(imageSize(aspectRatio, shrinkImage).height / 2)
          .format('jpg')}
        alt={alt}
        loading="lazy"
        className="w-full"
      />
    </picture>
  );
};

Image.defaultProps = {
  aspectRatio: '3:2',
  shrinkImage: 1
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
  aspectRatio: PropTypes.oneOf(['1:1', '3:2', '2:1']),
  shrinkImage: PropTypes.number // Floating point 0 - 1
};

export default Image;

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
    return shrink({ width: 2560, height: 1440 }, shrinkImage);
  }
}

const Image = ({ image, alt, aspectRatio, shrinkImage }) => {
  return image?.asset ? (
    <picture>
      {image.asset?.extension && image.asset.extension === 'gif' && image.asset?.url ? (
        <>
          <source
            type="image/gif"
            srcSet={image.asset.url}
          />
          <img
            srcSet={image.asset.url}
            alt={alt}
            loading="lazy"
            className="w-full"
          />
        </>
      ) : (
        <>
          <source
            type="image/webp"
            // 1008 = 56rem = xl breakpoint in Tailwind
            media="(min-width: 1008px)"
            srcSet={aspectRatio === 'No cropping' ? imageUrlFor(buildImageObj(image))
              .width(imageSize(aspectRatio, shrinkImage).width)
              .format('webp')
              .quality(80) : imageUrlFor(buildImageObj(image))
              .width(imageSize(aspectRatio, shrinkImage).width)
              .height(imageSize(aspectRatio, shrinkImage).height)
              .format('webp')
              .quality(80)}
          />
          <source
            // 1008 = 56rem = xl breakpoint in Tailwind
            media="(min-width: 1008px)"
            srcSet={aspectRatio === 'No cropping' ? imageUrlFor(buildImageObj(image))
              .width(imageSize(aspectRatio, shrinkImage).width)
              .format('jpg') : imageUrlFor(buildImageObj(image))
              .width(imageSize(aspectRatio, shrinkImage).width)
              .height(imageSize(aspectRatio, shrinkImage).height)
              .format('jpg')}
            className="block mx-auto"
          />
          <img
            srcSet={aspectRatio === 'No cropping' ? imageUrlFor(buildImageObj(image))
              .width(imageSize(aspectRatio, shrinkImage).width / 2)
              .format('jpg') : imageUrlFor(buildImageObj(image))
              .width(imageSize(aspectRatio, shrinkImage).width / 2)
              .height(imageSize(aspectRatio, shrinkImage).height / 2)
              .format('jpg')}
            alt={alt}
            loading="lazy"
            className="block mx-auto"
          />        
        </>
      )}
    </picture>
  ) : null;
};

Image.defaultProps = {
  aspectRatio: '3:2',
  shrinkImage: 1,
  alt: ''
};

Image.propTypes = {
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _id: PropTypes.string,
      _ref: PropTypes.string
    }),
    crop: PropTypes.object,
    hotspot: PropTypes.object
  }).isRequired,
  alt: PropTypes.string,
  aspectRatio: PropTypes.oneOf(['1:1', '3:2', '2:1', 'No cropping']),
  shrinkImage: PropTypes.number, // Floating point 0 - 1
};

export default Image;

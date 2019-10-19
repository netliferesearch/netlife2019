import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from './Image';

const imageClasses = (imageLeft, square, isHalf) =>
  classNames({
    'order-1 md:order-2 w-full px-4': true,
    'md:w-1/2': isHalf || square,
    'md:w-2/3': !isHalf && !square,
    'md:order-first': imageLeft
  });

// column width can override defaults.
const contentClasses = (square, isHalf) =>
  classNames({
    'order-2 md:order-1 w-full px-4 mt-4 md:-mt-2': true,
    'md:w-1/2': isHalf || square,
    'md:w-1/3': !isHalf && !square
  });

const TextImage = ({ image, alt, children, imageLeft, square, isHalf }) => (
  <section className="flex flex-wrap -mx-4">
    <div className={imageClasses(imageLeft, square, isHalf)}>
      {image?.asset && <Image image={image} alt={alt} aspectRatio={square ? '1:1' : '3:2'} />}
    </div>
    <div className={contentClasses(square, isHalf)}>{children}</div>
  </section>
);

TextImage.propTypes = {
  image: PropTypes.object,
  alt: PropTypes.string,
  imageLeft: PropTypes.bool,
  square: PropTypes.bool,
  isHalf: PropTypes.bool
};

export default TextImage;

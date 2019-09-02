import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from './Image';

const imageClasses = (imageLeft, square, half) =>
  classNames({
    'order-1 md:order-2 w-full px-4': true,
    'md:w-2/3': !square && !half,
    'md:w-1/2': square || half,
    'md:order-first': imageLeft
  });

const contentClasses = (square, half) =>
  classNames({
    'order-2 md:order-1 w-full px-4 mt-4 md:-mt-2': true,
    'md:w-1/3': !square && !half,
    'md:w-1/2': square || half
  });

const TextImage = ({ image, alt, children, imageLeft, square, half }) => (
  <section className="flex flex-wrap w-full -mx-4">
    <div className={imageClasses(imageLeft, square, half)}>
      <Image image={image} alt={alt} square={square} />
    </div>
    <div className={contentClasses(square, half)}>{children}</div>
  </section>
);

TextImage.propTypes = {
  image: PropTypes.object,
  alt: PropTypes.string,
  imageLeft: PropTypes.bool,
  square: PropTypes.bool,
  half: PropTypes.bool
};

export default TextImage;

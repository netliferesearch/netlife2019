import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const imageLast = imageLeft =>
  classNames({
    'order-1 md:order-2 w-full md:w-2/3 px-4': true,
    'md:order-first': imageLeft
  });

const TextImage = ({ src, alt, children, imageLeft }) => (
  <section className="flex flex-wrap w-full -mx-4">
    <div className={imageLast(imageLeft)}>
      <img src={src} alt={alt} className="w-full" />
    </div>
    <div className="order-2 md:order-1 w-full md:w-1/3 px-4 mt-4 md:mt-0">
      {children}
    </div>
  </section>
);

TextImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  imageLeft: PropTypes.bool
};

export default TextImage;

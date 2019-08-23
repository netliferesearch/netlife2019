import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// image

const imageLast = ltr =>
  classNames({
    'order-1 md:order-2': true,
    'order-last': !ltr
  });

const TextImage = ({ img, alt, richText, leftToRight }) => (
  <section className="flex flex-wrap">
    <img src={img} alt={alt} classNames={imageLast(leftToRight)} />
    <div className="order-2 md:order-1">{richText}</div>
  </section>
);

TextImage.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  rightText: PropTypes.string,
  leftToRight: PropTypes.bool
};

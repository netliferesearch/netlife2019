import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

const TextImageScroll = ({ images, children }) => (
  <section className="flex flex-wrap -mx-4 md:h-64">
    <div className="md:absolute right-0 w-full md:w-1/2 order-1 md:order-2">
      <div className="flex overflow-x-auto px-4">
        {images.map(image => (
          <div className="max-w-sm inline-block mr-4 flex-shrink-0">
            <Image image={image.image} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
    <div className="order-2 md:order-1 md:w-1/2 w-full px-4 mt-4 md:-mt-2">
      {children}
    </div>
  </section>
);

TextImageScroll.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object)
};

export default TextImageScroll;

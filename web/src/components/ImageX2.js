import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

const ImageX2 = ({ imageLeft, altLeft, imageRight, altRight, aspectRatio }) => (
  <section className="flex flex-wrap -mx-4">
    <div className="w-full px-4 md:w-1/2">
      {imageLeft?.asset && <Image image={imageLeft} alt={altLeft} aspectRatio={aspectRatio} />}
    </div>
    <div className="w-full px-4 md:w-1/2">
    {imageRight?.asset && <Image image={imageRight} alt={altRight} aspectRatio={aspectRatio} />}
    </div>
  </section>
);

ImageX2.propTypes = {
  imageLeft: PropTypes.object,
  altLeft: PropTypes.string,
  imageRight: PropTypes.object,
  altRight: PropTypes.string,
  aspectRatio: PropTypes.string,
};

export default ImageX2;

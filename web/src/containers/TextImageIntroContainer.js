import React from 'react';
import PropTypes from 'prop-types';
import TextImage from '../components/TextImage';
import PortableText from '../components/PortableText';

const TextImageIntroContainer = ({image, alt, imageLeft, isHalf, textContent}) => {
  return (
    <article className="border-b mb-16 py-16">
      <TextImage
        image={image}
        alt={alt}
        imageLeft={imageLeft}
        isHalf={isHalf}
      >
        {textContent && <PortableText blocks={textContent} />}
      </TextImage>
    </article>
  );
};

TextImageIntroContainer.defaultProps = {
  alt: '',
  imageLeft: false,
  isHalf: false,
};

TextImageIntroContainer.propTypes = {
  image: PropTypes.shape().isRequired,
  alt: PropTypes.string,
  imageLeft: PropTypes.bool,
  isHalf: PropTypes.bool,
  textContent: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TextImageIntroContainer;
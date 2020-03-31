import React from 'react';
import PropTypes from 'prop-types';
import PortableText from '../PortableText';
import Image from '../Image';
import Link from '../Link';

const PostContentFeatured = ({
  alt,
  aspectRatio,
  contentClass,
  image,
  imagePlacement,
  slug,
  textContent,
  title,
  wrapperClass
}) => (
  <div
    className={`post-content--featured${
      wrapperClass ? ` ${wrapperClass}` : ''
    }`}
  >
    {image?.asset && (
      <figure className={imagePlacement === 'left' ? 'md:order-1' : ''}>
        <Image image={image} alt={alt} aspectRatio={aspectRatio} />
      </figure>
    )}
    <div className={contentClass}>
      <h3 className="text-lg">
        <Link className="font-lining link" slug={slug?.current} title={title}>
          {title}
        </Link>
      </h3>
      {textContent && <PortableText blocks={textContent} />}
    </div>
  </div>
);

PostContentFeatured.propTypes = {
  alt: PropTypes.string,
  aspectRatio: PropTypes.string,
  contentClass: PropTypes.string,
  image: PropTypes.string,
  index: PropTypes.string,
  slug: PropTypes.string,
  textContent: PropTypes.array,
  title: PropTypes.string,
  wrapperClass: PropTypes.string
};

export default PostContentFeatured;

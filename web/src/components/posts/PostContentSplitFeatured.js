import React from 'react';
import PropTypes from 'prop-types';
import PortableText from '../PortableText';
import Image from '../Image';
import Link from '../Link';
import { setSplitClass, setSplitType } from '../../lib/setSplitUtil';

const PostContentSplitFeatured = ({
  alt,
  aspectRatio,
  image,
  imagePlacement,
  slug,
  splitType,
  textContent,
  title
}) => {
  const imageColOrder = imagePlacement === 'right' ? ' order-1 md:order-2' : '';
  const contentColOrder =
    imagePlacement === 'right' ? ' order-2 md:order-1' : '';
  return (
    <div className={`post-content--split ${setSplitType(splitType)} mb-20`}>
      <div class={`flex flex-wrap -mx-4 mb-4`}>
        {image?.asset && (
          <figure
            className={`w-full px-4 md:${setSplitClass(
              splitType,
              1
            )}${imageColOrder}`}
          >
            <Image image={image} alt={alt} aspectRatio={aspectRatio} />
          </figure>
        )}
        <div
          class={`w-full px-4${
            image?.asset
              ? ` md:${setSplitClass(splitType, 2)}${contentColOrder}`
              : ''
          }`}
        >
          <h3 className="text-lg">
            <Link
              className="font-lining link"
              slug={slug?.current}
              title={title}
            >
              {title}
            </Link>
          </h3>
          {textContent && <PortableText blocks={textContent} />}
        </div>
      </div>
    </div>
  );
};

PostContentSplitFeatured.propTypes = {
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

export default PostContentSplitFeatured;

import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import Link from '../Link';
import { setSplitClass, setSplitType } from '../../lib/setSplitUtil';
import {
  formatFullDate,
  formatDateVerbose
} from '../../lib/formatDates/formatDates';

const PostFeatured = ({
  alt,
  aspectRatio,
  image,
  imagePlacement,
  slug,
  splitType,
  title,
  authorName,
  authorSlug,
  authorInactive,
  categoryName,
  intro,
  publishDate
}) => {
  const imageColOrder = imagePlacement === 'right' ? ' order-1 md:order-2' : '';
  const contentColOrder =
    imagePlacement === 'right' ? ' order-2 md:order-1' : '';

  return (
    <div className={`post-content--split ${setSplitType(splitType)} mb-16`}>
      <div className={`flex flex-wrap -mx-4 mb-4`}>
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
          className={`w-full px-4${
            image?.asset
              ? ` md:${setSplitClass(splitType, 2)}${contentColOrder}`
              : ''
          }`}
        >
          <div className="article__metadata mb-2">
            {categoryName && <span className="text-base">{categoryName}</span>}
            {categoryName && ' | '}
            <span className="text-base">
              {formatDateVerbose(formatFullDate(publishDate))}
            </span>
          </div>
          <h3 className="text-xl mb-4">
            <Link
              className="font-lining link"
              slug={slug?.current}
              title={title}
            >
              {title}
            </Link>
          </h3>
          {intro && <div className="text-lg mb-4">{intro}</div>}
          {authorName && (
            <span className="text-base">
              Skrevet av{' '}
              {authorSlug && !authorInactive ? (
                <Link
                  className="font-lining link"
                  slug={authorSlug?.current}
                  title={authorName}
                >
                  {authorName}
                </Link>
              ) : (
                authorName
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

PostFeatured.propTypes = {
  alt: PropTypes.string,
  aspectRatio: PropTypes.string,
  contentClass: PropTypes.string,
  image: PropTypes.object,
  index: PropTypes.string,
  slug: PropTypes.object,
  title: PropTypes.string,
  wrapperClass: PropTypes.string
};

export default PostFeatured;

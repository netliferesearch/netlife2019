import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import Link from '../Link';
import { setSplitClass, setSplitType } from '../../lib/setSplitUtil';
import {
  formatFullDate,
  formatDateVerbose
} from '../../lib/formatDates/formatDates';

const Post = ({
  alt,
  aspectRatio,
  authorInactive,
  authorName,
  authorSlug,
  categoryName,
  image,
  imagePlacement,
  intro,
  publishDate,
  showAuthor,
  slug,
  splitType,
  title
}) => {
  const imageColOrder = imagePlacement === 'right' ? ' order-1 md:order-2' : '';
  const contentColOrder =
    imagePlacement === 'right' ? ' order-2 md:order-1' : '';

  return (
    <div className={`post-content--split ${setSplitType(splitType)} mb-10`}>
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
            {categoryName && <span className="text-sml">{categoryName}</span>}
            {categoryName && ' | '}
            <span className="text-sml">
              {formatDateVerbose(formatFullDate(publishDate))}
            </span>
          </div>
          <h3 className="text-md mb-4">
            <Link
              className="font-lining link"
              slug={slug?.current}
              title={title}
            >
              {title}
            </Link>
          </h3>
          {intro && <div className="text-sm mb-4">{intro}</div>}
          {showAuthor && authorName && (
            <span className="text-sml">
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

Post.propTypes = {
  alt: PropTypes.string,
  aspectRatio: PropTypes.string,
  authorInactive: PropTypes.bool,
  authorName: PropTypes.string,
  authorSlug: PropTypes.object,
  categoryName: PropTypes.string,
  image: PropTypes.object,
  imagePlacement: PropTypes.string,
  intro: PropTypes.string,
  publishDate: PropTypes.string,
  showAuthor: PropTypes.bool,
  slug: PropTypes.object,
  splitType: PropTypes.string,
  title: PropTypes.string
};

export default Post;

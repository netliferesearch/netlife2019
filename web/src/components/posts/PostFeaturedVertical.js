import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import Link from '../Link';
import {
  formatFullDate,
  formatDateVerbose
} from '../../lib/formatDates/formatDates';

const PostFeaturedVertical = ({
  alt,
  aspectRatio,
  authorInactive,
  authorName,
  authorSlug,
  categoryName,
  id,
  image,
  intro,
  publishDate,
  showAuthor,
  slug,
  title
}) => (
  <article key={id} className="post-featured-vertical md:w-1/2 mb-16 px-4">
    {image?.asset && (
      <figure className={`w-full md:w-2/3 mb-4`}>
        <Image image={image} alt={alt} aspectRatio={aspectRatio} />
      </figure>
    )}
    <div>
      <div className="article__metadata mb-2">
        {categoryName && <span className="text-base">{categoryName}</span>}
        {categoryName && ' | '}
        <span className="text-base">
          {formatDateVerbose(formatFullDate(publishDate))}
        </span>
      </div>
      <h3 className="text-lg mb-4">
        <Link className="font-lining link" slug={slug?.current} title={title}>
          {title}
        </Link>
      </h3>
      {intro && <div className="text-base mb-4">{intro}</div>}
      {showAuthor && authorName && (
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
  </article>
);

PostFeaturedVertical.propTypes = {
  alt: PropTypes.string,
  aspectRatio: PropTypes.string,
  contentClass: PropTypes.string,
  image: PropTypes.object,
  index: PropTypes.string,
  slug: PropTypes.object,
  title: PropTypes.string,
  wrapperClass: PropTypes.string
};

export default PostFeaturedVertical;

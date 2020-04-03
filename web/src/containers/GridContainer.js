import React from 'react';
import PropTypes from 'prop-types';
import PostFeaturedVertical from '../components/posts/PostFeaturedVertical';

const GridContainer = ({ posts }) => (
  <div className="flex flex-wrap -mx-4">
    {posts &&
      posts.map(item => {
        const {
          author,
          id,
          intro,
          mainImage,
          publishDate,
          serviceCategories,
          slug,
          title
        } = item;
        const alt = mainImage?.alt || null;
        const aspectRatio = mainImage?.aspectRatio || null;
        const authorName = (author && author[0]?.name) || null;
        const authorRole = (author && author[0]?.role) || null;
        const authorSlug = (author && author[0]?.slug) || null;
        const categoryName = serviceCategories[0]?.name || null;
        const image = mainImage?.image || null;
        return (
          <PostFeaturedVertical
            alt={alt}
            aspectRatio={aspectRatio}
            authorName={authorName}
            authorRole={authorRole}
            authorSlug={authorSlug}
            categoryName={categoryName}
            id={id}
            image={image}
            intro={intro}
            key={id}
            publishDate={publishDate}
            showAuthor={false}
            slug={slug}
            title={title}
          />
        );
      })}
  </div>
);

GridContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape())
};

export default GridContainer;

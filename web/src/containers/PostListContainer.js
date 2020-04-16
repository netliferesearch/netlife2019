import React from 'react';
import PropTypes from 'prop-types';
import Post from '../components/posts/Post';

const PostListContainer = ({ posts }) => (
  <div className="flex flex-wrap">
    <div className="w-full md:w-3/4 ml-20 mr-auto">
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
          const authorInactive = (author && author[0]?.inactive) || null;
          const authorName = (author && author[0]?.name) || null;
          const authorRole = (author && author[0]?.role) || null;
          const authorSlug = (author && author[0]?.slug) || null;
          const categoryName =
            (serviceCategories && serviceCategories[0]?.title) || null;
          const image = mainImage?.image || null;
          return (
            <Post
              alt={alt}
              aspectRatio={aspectRatio}
              authorInactive={authorInactive}
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
              splitType="40-60"
              title={title}
            />
          );
        })}
    </div>
  </div>
);

PostListContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape())
};

export default PostListContainer;

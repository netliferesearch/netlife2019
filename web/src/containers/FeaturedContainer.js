import React from 'react';
import PropTypes from 'prop-types';
import PostFeatured from '../components/posts/PostFeatured';
import PostFeaturedVertical from '../components/posts/PostFeaturedVertical';

const renderPostContent = (data, index, key) => {
  const {
    author,
    intro,
    mainImage,
    publishDate,
    serviceCategories,
    slug,
    title,
    _rawIntro
  } = data;
  const alt = mainImage?.alt || null;
  const aspectRatio = mainImage?.aspectRatio || null;
  const authorInactive = author[0]?.inactive || null;
  const authorName = author[0]?.name || null;
  const authorRole = author[0]?.role || null;
  const authorSlug = author[0]?.slug || null;
  const categoryName = serviceCategories[0]?.name || null;
  const image = mainImage?.image || null;
  const textContent = _rawIntro?.textContent || null;

  return index === 0 || index === 3 ? (
    <PostFeatured
      alt={alt}
      aspectRatio={aspectRatio}
      authorInactive={authorInactive}
      authorName={authorName}
      authorRole={authorRole}
      authorSlug={authorSlug}
      categoryName={categoryName}
      image={image}
      imagePlacement={index === 3 ? 'right' : ''}
      intro={intro}
      publishDate={publishDate}
      slug={slug}
      splitType={index === 3 ? '60-40' : '40-60'}
      textContent={textContent}
      title={title}
    />
  ) : (
    <PostFeaturedVertical
      alt={alt}
      aspectRatio={aspectRatio}
      authorInactive={authorInactive}
      authorName={authorName}
      authorRole={authorRole}
      authorSlug={authorSlug}
      categoryName={categoryName}
      image={image}
      imagePlacement={index === 3 ? 'right' : ''}
      intro={intro}
      key={key}
      publishDate={publishDate}
      slug={slug}
      splitType={index === 3 ? '60-40' : '40-60'}
      textContent={textContent}
      title={title}
    />
  );
};

const FeaturedContainer = ({ posts }) => {
  // We only render the first 4 articles. That's defined by
  // 'featuredPosts' in 'web/src/templates/blogPosts.js'
  const post1 = [];
  const post2 = [];
  const post3 = [];
  const post4 = [];
  posts &&
    posts.map((c, index) => {
      index === 0 &&
        post1.push(<article key={c.id}>{renderPostContent(c, index)}</article>);
      index === 1 && post2.push(renderPostContent(c, index, c.id));
      index === 2 && post3.push(renderPostContent(c, index, c.id));
      index === 3 &&
        post4.push(<article key={c.id}>{renderPostContent(c, index)}</article>);
      return null;
    });
  return (
    <>
      {post1}
      <div className="flex flex-wrap -mx-4">
        {post2}
        {post3}
      </div>
      {post4}
    </>
  );
};

FeaturedContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape())
};

export default FeaturedContainer;

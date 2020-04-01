import React from 'react';
import PropTypes from 'prop-types';
import TextImage from '../components/TextImage';
import PortableText from '../components/PortableText';
import Link from '../components/Link';
import PostFeatured from '../components/posts/PostFeatured';

const renderPostContent = (data, index) => {
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
    <div className="mb-20">
      <TextImage
        image={image}
        alt={alt}
        imageLeft={index === 2}
        aspectRatio={aspectRatio}
      >
        <h3 className="text-lg">
          <Link className="font-lining link" slug={slug?.current} title={title}>
            {title}
          </Link>
        </h3>
        {textContent && <PortableText blocks={textContent} />}
      </TextImage>
    </div>
  );
};

const FeaturedContainer = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.map((c, index) => {
          // 'c' - output example below
          // We'll need more than this if we're to make it similar to Figma here:
          // https://www.figma.com/file/G8u9D5Uog1kC1aHwXETvXy/netlife.com?node-id=39%3A83
          //
          // const c = {
          //   id: "4465247a-aab3-5f72-ad89-02a571dcbb40",
          //   title: "Slett nettsøppel og redd kloden!",
          //   slug: {
          //     current: "blogg/slett-nettsoeppel-og-redd-kloden",
          //   },
          //   publishDate: "2019-11-07",
          //   mainImageText: "Photo: Ervins Strauhmanis",
          //   mainImage: {
          //     image: {
          //       asset: {
          //         _id: "image-b7305126a6c023335865540109378da0c444e577-799x533-jpg",
          //       },
          //       hotspot: null,
          //       crop: null,
          //     },
          //     alt: "Bilde av en delete-knapp på tastatur",
          //   }
          // };
          return <article key={c.id}>{renderPostContent(c, index)}</article>;
        })}
    </>
  );
};

FeaturedContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape())
};

export default FeaturedContainer;

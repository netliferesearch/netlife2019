import React from 'react';
import PropTypes from 'prop-types';
import TextImage from '../components/TextImage';
import PortableText from '../components/PortableText';
import Link from '../components/Link';
import PostContentFeatured from '../components/posts/PostContentFeatured';

const renderPostContent = (data, index) => {
  const { title, slug, mainImage, _rawIntro } = data;
  const image = mainImage?.image || null;
  const alt = mainImage?.alt || null;
  const aspectRatio = mainImage?.aspectRatio || null;
  const textContent = _rawIntro?.textContent || null;

  let wrapperClass = '';
  let contentClass = '';

  switch (index) {
    case 3:
      wrapperClass = 'flex flex-col mb-20';
      contentClass = 'mt-4 md:mb-12 md:mt-0';
      break;
    case 0:
    default:
      wrapperClass = 'mb-20';
      contentClass = 'mt-4 md:mt-12';
      break;
  }

  return index === 0 || index === 3 ? (
    <PostContentFeatured
      alt={alt}
      aspectRatio={aspectRatio}
      contentClass={contentClass}
      image={image}
      imagePlacement={index === 3 ? 'left' : ''}
      slug={slug}
      textContent={textContent}
      title={title}
      wrapperClass={wrapperClass}
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

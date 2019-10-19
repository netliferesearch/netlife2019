import React from 'react';
import PropTypes from 'prop-types';
import TextImage from '../components/TextImage';
import PortableText from '../components/PortableText';
import Image from '../components/Image';
import Link from '../components/Link';

const renderPostContent = (data, index) => {

  const { title, slug, mainImage, _rawIntro } = data;
  const image = mainImage?.image || null;
  const alt = mainImage?.alt || null;
  const textContent = _rawIntro?.textContent || null;

  let wrapperClass = '';
  let contentClass = '';

  switch(index) {
    case 3:
        wrapperClass = 'flex flex-col md:px-16 mb-20';
        contentClass = 'mb-12';
      break;
    case 0:
      default:
        wrapperClass = 'mb-20 md:px-16';
        contentClass = 'mt-12';
      break;

  }

  return index === 0 || index === 3 ? (
    <div className={wrapperClass}>
      {image?.asset && (
        <figure className={index === 3 ? ' order-1' : ''}>
          <Image
            image={image}
            alt={alt}
          />
        </figure>
      )}
      <div className={contentClass}>
        <h3 className="text-lg">
          <Link className="font-lining link" slug={slug?.current} title={title}>{title}</Link>
        </h3>
        {textContent && <PortableText blocks={textContent} />}
      </div>
    </div>
  ) : (
    <div className="mb-20">
      <TextImage
        image={image}
        alt={alt}
        imageLeft={index === 2}
      >
        <h3 className="text-lg">
        <Link className="font-lining link" slug={slug?.current} title={title}>{title}</Link>
        </h3>
        {textContent && <PortableText blocks={textContent} />}
      </TextImage>
    </div>
  );
};


const FeaturedContainer = ({posts}) => {
  return (
    <>
      {posts && posts.map((c, index) => (
        <article key={c.id}>
          { renderPostContent(c, index) }
        </article>
      ))}
    </>
  );
};

FeaturedContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape()),
};

export default FeaturedContainer;
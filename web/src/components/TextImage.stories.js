import React from 'react';
import TextImage from './TextImage';
import { graphql, useStaticQuery } from 'gatsby';
import Link from './Link';

export default {
  title: 'Components|TextImage',
  parameters: {
    component: TextImage,
    componentSubtitle:
      'A TextImage is a component that holds both text and an image.'
  }
};
const { posts } = useStaticQuery(
  graphql`
    query {
      posts: allSanityBlogPost {
        nodes {
          id
          title
          slug {
            current
          }
          publishDate
          mainImageText
          mainImage {
            image {
              ...ImageFragment
            }
            alt
          }
        }
      }
    }
  `
);

const blogPosts = posts?.nodes;
const featuredPost = blogPosts[0];
const { title, slug, mainImage } = featuredPost;
const image = mainImage?.image || null;
const alt = mainImage?.alt || null;

export const textImageOriginal = () => (
  <div className="mb-20">
    <TextImage
      image={image}
      alt={alt}
    >
      <h3 className="text-lg">
        <Link className="font-lining link" slug={slug?.current} title={title}>
          {title}
        </Link>
      </h3>
    </TextImage>
  </div>
);

export const textImageSquare = () => (
  <div className="mb-20">
    <TextImage
      image={image}
      alt={alt}
      square={true}
    >
      <h3 className="text-lg">
        <Link className="font-lining link" slug={slug?.current} title={title}>
          {title}
        </Link>
      </h3>
    </TextImage>
  </div>
);

export const textImageLeft = () => (
  <div className="mb-20">
    <TextImage
      image={image}
      alt={alt}
      imageLeft={true}
    >
      <h3 className="text-lg">
        <Link className="font-lining link" slug={slug?.current} title={title}>
          {title}
        </Link>
      </h3>
    </TextImage>
  </div>
);

export const textImageHalf = () => (
  <div className="mb-20">
    <TextImage
      image={image}
      alt={alt}
      isHalf={true}
    >
      <h3 className="text-lg">
        <Link className="font-lining link" slug={slug?.current} title={title}>
          {title}
        </Link>
      </h3>
    </TextImage>
  </div>
);

textImageOriginal.story = { name: 'With original image' };
textImageSquare.story = { name: 'With square image' };
textImageLeft.story = { name: 'With image on the left' };
textImageHalf.story = { name: 'With original image filling half the space' };

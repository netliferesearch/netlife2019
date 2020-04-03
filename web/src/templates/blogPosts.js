import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import MainHeading from '../components/MainHeading';
import FeaturedContainer from '../containers/FeaturedContainer';
import GridContainer from '../containers/GridContainer';
import Link from '../components/Link';
import PostListContainer from '../containers/PostListContainer';

export default ({ pageContext, location }) => {
  const { page, posts } = useStaticQuery(
    graphql`
      query {
        page: sanityBlogOverview {
          title
          heading
          intro
          _rawSeo(resolveReferences: { maxDepth: 5 })
        }
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
              aspectRatio
            }
            serviceCategories {
              name
            }
            author {
              name
              role
              slug {
                current
              }
              inactive
            }
            intro
          }
        }
      }
    `
  );

  const {
    title: title = '',
    intro: intro = null,
    heading: heading = null,
    _rawSeo: seo = []
  } = page;

  const blogPosts = posts?.nodes;
  const featuredPosts = blogPosts.slice(0, 4);
  const postsGrid = blogPosts.slice(5, 9);
  const postsList = blogPosts.slice(10, blogPosts.length);

  return (
    <>
      <SEO title={title} description="" seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <MainHeading tight>{heading}</MainHeading>
        {intro && <h2 className="-mt-8 mb-8">{intro}</h2>}
        {featuredPosts && (
          <section className="mb-12">
            <FeaturedContainer posts={featuredPosts} />
          </section>
        )}
        {postsGrid && (
          <section className="py-16 border-b">
            <PostListContainer posts={postsGrid} />
          </section>
        )}
        {postsList && (
          <section className="py-16 border-b">
            <h3 className="text-lg mb-4">Arkiv</h3>
            <ul>
              {postsList.map(post => (
                <li key={post.id}>
                  <Link
                    slug={post.slug.current}
                    title={post.title}
                    className="font-lining link"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </Layout>
    </>
  );
};

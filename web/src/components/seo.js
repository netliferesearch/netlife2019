import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { imageUrlFor } from '../lib/image-url';
import { buildImageObj } from '../lib/helpers';

const SEO = props => {
  const DOMAIN = 'netlife.com';

  // Most of these values fall back on each other
  const title = props.seoTitle || props.title;
  const description = props.description;
  const ogImage = props.ogImage || props.image;
  const ogImageAlt = props.ogImageAlt || props.imageAlt;
  const ogTitle = props.ogTitle || title;
  const ogDescription = props.ogDescription || description;
  const twitterTitle = props.twitterTitle || ogTitle;
  const twitterDescription = props.twitterDescription || ogDescription;
  const twitterImage = props.twitterImage || ogImage;
  const twitterImageAlt = props.twitterImageAlt || ogImageAlt;
  const indexing = props.indexing || 'index, follow';
  const canonical = props.canonical || props.url; // Check if this can be <consumer>

  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const siteTitle = (data.site && data.site.title) || '';
        const pagePath = '';
        const ogImageUrl =
          ogImage && ogImage.asset
            ? imageUrlFor(buildImageObj(ogImage))
                .width(1200)
                .height(630)
                .url()
            : '';
        const twitterImageUrl =
          twitterImage && twitterImage.asset
            ? imageUrlFor(buildImageObj(twitterImage))
                .width(1024)
                .height(512)
                .url()
            : '';

        console.log(props.pageUrl);

        return (
          <Helmet
            htmlAttributes={{ lang: 'nb' /* Norwegian */ }}
            title={title}
            titleTemplate={title === siteTitle ? '%s' : `%s | ${siteTitle}`}
            link={[
              {
                rel: 'canonical',
                href: canonical || pagePath
              }
            ]}
            meta={[
              // TODO: REMOVE THIS BEFORE RELEASE
              {
                name: 'robots',
                content: 'noindex'
              },
              // GLOBAL RULES
              {
                name: 'og:site_name',
                content: DOMAIN
              },
              {
                name: 'og:type',
                content: 'website'
              },
              {
                name: 'twitter:card',
                content: 'summary_large_image'
              },
              // END GLOBAL RULES
              {
                name: 'title',
                content: title
              },
              {
                property: 'og:title',
                content: ogTitle
              },
              {
                propterty: 'twitter:title',
                content: twitterTitle
              },
              {
                name: 'description',
                content: description
              },
              {
                property: 'og:description',
                content: ogDescription
              },
              {
                propterty: 'twitter:description',
                content: twitterDescription
              },
              {
                property: 'og:image',
                content: ogImageUrl
              },
              {
                propterty: 'twitter:image',
                content: twitterImageUrl
              },
              {
                property: 'og:image:alt',
                content: ogImageAlt
              },
              {
                propterty: 'twitter:image:alt',
                content: twitterImageAlt
              },
              {
                name: 'robots',
                content: indexing
              }
            ]}
          />
        );
      }}
    />
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired
};

export default SEO;

const detailsQuery = graphql`
  {
    site: sanitySiteSettings(_id: { eq: "siteSettings" }) {
      title
    }
  }
`;

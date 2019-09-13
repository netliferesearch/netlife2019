import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { imageUrlFor } from '../lib/image-url';
import { buildImageObj } from '../lib/helpers';

const SEO = ({ seo, location }) => {
  const DOMAIN = 'netlife.com';
  const LANG = 'nb'; /* Norwegian */

  const { site } = useStaticQuery(
    graphql`
      {
        site: sanitySiteSettings(_id: { eq: "siteSettings" }) {
          title
        }
      }
    `
  );

  // Most of these values fall back on each other
  const title = seo?.seoTitle || site.title;
  const description = seo?.description || '';
  const ogImage = seo?.ogImage || seo?.image;
  const ogImageAlt = seo?.ogImageAlt || seo?.imageAlt || '';
  const ogTitle = seo?.ogTitle || title;
  const ogDescription = seo?.ogDescription || description;
  const twitterTitle = seo?.twitterTitle || ogTitle;
  const twitterDescription = seo?.twitterDescription || ogDescription;
  const twitterImage = seo?.twitterImage || ogImage;
  const twitterImageAlt = seo?.twitterImageAlt || ogImageAlt;
  const indexing = seo?.indexing || 'index, follow';
  const canonical = seo?.canonical || location?.href || '';
  const siteTitle = site?.title || '';

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

  return (
    <Helmet
      htmlAttributes={{ lang: LANG }}
      title={title}
      titleTemplate={title === siteTitle ? '%s' : `%s | ${siteTitle}`}
      link={[
        {
          rel: 'canonical',
          href: canonical
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
};

SEO.propTypes = {
  seoTitle: PropTypes.string,
  description: PropTypes.string,
  ogImage: PropTypes.object,
  ogImageAlt: PropTypes.string,
  ogTitle: PropTypes.string,
  ogDescription: PropTypes.string,
  twitterTitle: PropTypes.string,
  twitterDescription: PropTypes.string,
  twitterImage: PropTypes.object,
  twitterImageAlt: PropTypes.string,
  indexing: PropTypes.string,
  canonical: PropTypes.string
};

export default SEO;

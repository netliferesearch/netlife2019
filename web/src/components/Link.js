import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';

export const query = graphql`
  fragment PageLinks on SanityMenu {
    items {
      _key
      text
      url
      nofollow
      internalPage {
        ... on SanityPerson {
          slug {
            current
          }
        }
        ... on SanityOffice {
          slug {
            current
          }
        }
        ... on SanityNewsletter {
          slug {
            current
          }
        }
        ... on SanityJobAdvertListing {
          slug {
            current
          }
        }
        ... on SanityJobAdvert {
          slug {
            current
          }
        }
        ... on SanityContact {
          slug {
            current
          }
        }
        ... on SanityBlogPost {
          slug {
            current
          }
        }
        ... on SanityArticle {
          slug {
            current
          }
        }
        ... on SanityPeopleOverview {
          slug {
            current
          }
        }
        ... on SanityAbout {
          slug {
            current
          }
        }
        ... on SanityEventListing {
          slug {
            current
          }
        }
        ... on SanityEvent {
          slug {
            current
          }
        }
      }
    }
  }
`;

const Link = ({ href, noFollow, slug, children, ...props }) => {
  if (slug) {
    return (
      <GatsbyLink to={`/${slug}`} rel={noFollow ? 'nofollow' : null} {...props}>
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={href} rel={noFollow ? 'nofollow' : null} {...props}>
      {children}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  noFollow: PropTypes.bool,
  slug: PropTypes.string
};

export default Link;

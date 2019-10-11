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
        ... on SanityCases {
          slug {
            current
          }
        }
        ... on SanityOurServices {
          slug {
            current
          }
        }
      }
    }
  }
`;

const Link = ({ href, title, noFollow, slug, children, ...props }) => {
  if (slug) {
    return (
      <GatsbyLink to={`/${slug}`} rel={noFollow ? 'nofollow' : null} title={title} {...props}>
        {children}
      </GatsbyLink>
    );
  }
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a href={href} rel={`noopener noreferrer ${noFollow ? 'nofollow' : null}`} title={title} target="_blank" {...props}>
      {children}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  noFollow: PropTypes.bool,
  slug: PropTypes.string,
  title: PropTypes.string,
};

export default Link;

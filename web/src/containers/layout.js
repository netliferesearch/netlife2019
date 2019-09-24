import React, { useState } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';

export const ImageFragment = graphql`
  fragment ImageFragment on SanityImage {
    asset {
      _id
    }
    hotspot {
      y
      x
      width
      height
      _type
      _key
    }
    crop {
      top
      right
      left
      bottom
      _type
      _key
    }
  }
`;

function LayoutContainer(props) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  function toggleHamburger() {
    setHamburgerOpen(!hamburgerOpen);
  }

  return (
    <Layout
      {...props}
      hamburgerOpen={hamburgerOpen}
      toggleHamburger={toggleHamburger}
    />
  );
}

LayoutContainer.propTypes = {
  hideMenu: PropTypes.bool
};

export default LayoutContainer;

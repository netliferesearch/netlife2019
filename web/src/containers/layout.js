import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';

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

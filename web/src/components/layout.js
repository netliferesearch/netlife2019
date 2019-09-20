import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './Footer';

const mainWrapperClasses = hamburgerOpen =>
  classNames({
    'flex flex-col justify-between min-h-screen px-5vw sm:px-7-5vw pt-4vw pb-4vw xl:pb-2vw': true,
    'bg-green': hamburgerOpen
  });

const contentWrapperClasses = hamburgerOpen =>
  classNames({
    'mt-12 flex-grow mb-16': true,
    'sr-only': hamburgerOpen
  });

const Layout = ({
  children,
  toggleHamburger,
  hamburgerOpen,
  breadcrumb,
  hideHamburger
}) => (
  <div className={mainWrapperClasses(hamburgerOpen)}>
    <Header
      toggleHamburger={toggleHamburger}
      breadcrumb={breadcrumb}
      hideHamburger={hideHamburger}
      hamburgerOpen={hamburgerOpen}
    />

    <div className={contentWrapperClasses(hamburgerOpen)}>{children}</div>

    <Footer />
  </div>
);

Layout.propTypes = {
  hamburgerOpen: PropTypes.bool,
  hideHamburger: PropTypes.bool,
  toggleHamburger: PropTypes.func,
  breadcrumb: PropTypes.object
};

export default Layout;

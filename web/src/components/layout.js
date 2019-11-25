import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './Footer';

const mainWrapperClasses = hamburgerOpen =>
  classNames({
    'flex flex-col justify-between min-h-screen px-5vw sm:px-5vw pt-4vw pb-4vw': true,
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
  hideHamburger,
  currentPage,
}) => (
  <div className={mainWrapperClasses(hamburgerOpen)}>
    {!hamburgerOpen && (
      <a href="#hovedinnhold" className="sr-only focus:not-sr-only">
        Hopp til hovedinnhold
      </a>
    )}
    <Header
      toggleHamburger={toggleHamburger}
      breadcrumb={breadcrumb}
      hideHamburger={hideHamburger}
      hamburgerOpen={hamburgerOpen}
      currentPage={currentPage}
    />

    <main
      id="hovedinnhold"
      className={contentWrapperClasses(hamburgerOpen)}
      hidden={hamburgerOpen}
    >
      {children}
    </main>

    <Footer dark={hamburgerOpen} />
  </div>
);

Layout.propTypes = {
  hamburgerOpen: PropTypes.bool,
  hideHamburger: PropTypes.bool,
  toggleHamburger: PropTypes.func,
  breadcrumb: PropTypes.object,
  currentPage: PropTypes.string,
};

export default Layout;

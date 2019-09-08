import React from 'react';
import Header from './header';
import Footer from './Footer';

const Layout = ({ children, onHideNav, onShowNav, showNav, breadcrumb }) => (
  <div className="flex flex-col justify-between min-h-screen px-5vw sm:px-7-5vw pt-4vw pb-4vw xl:pb-2vw">
    <Header
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
      breadcrumb={breadcrumb}
    />

    <div className="mt-12 flex-grow mb-16">{children}</div>

    <Footer />
  </div>
);

export default Layout;

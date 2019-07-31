import React from 'react';
import Header from './header';

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className="px-5vw sm:px-7-5vw py-4vw">
    <Header
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
    />
    <div>{children}</div>
    <footer className="flex flex-wrap">
      <div className="w-full md:w-1/3">
        <a
          className="font-sans hover:text-green-dark"
          href="mailto:hei@netlife.com"
        >
          hei@netlife.com
        </a>
        <br />
        <a className="font-sans hover:text-green-dark" href="tel:+4722424642">
          22 42 46 42
        </a>
      </div>
      <div className="flex flex-wrap w-full md:w-2/3">
        <div className="w-full md:w-1/2">
          <a className="font-sans hover:text-green-dark" href="#">
            Jobb med oss
          </a>
        </div>
        <div className="w-full md:w-1/2">
          <a className="font-sans hover:text-green-dark" href="#">
            Personvern og cookies
          </a>
        </div>
        <div className="w-full md:w-1/2">
          <a className="font-sans hover:text-green-dark" href="#">
            Fagblogg
          </a>
        </div>
        <div className="w-full md:w-1/2">
          <a className="font-sans hover:text-green-dark" href="#">
            Om Netlifes merkevare
          </a>
        </div>
      </div>
    </footer>
  </div>
);

export default Layout;

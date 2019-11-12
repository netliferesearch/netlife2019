import React from 'react';
import classNames from 'classnames';
import Link from '../components/Link';
import HamburgerMenu from './HamburgerMenu';

const logoClasses = dark =>
  classNames({
    'text-lg font-sans outline-none focus:shadow-outline': true,
    link: !dark
  });

const Header = ({
  toggleHamburger,
  hamburgerOpen,
  breadcrumb,
  hideHamburger,
  currentPage,
}) => (
  <header>
    <Link slug="/" className={logoClasses(hamburgerOpen)}>
      Netlife
    </Link>
    {breadcrumb && !hamburgerOpen && (
      <>
        <span className="text-lg" aria-hidden>
          {' '}
          ->{' '}
        </span>
        <Link
          slug={breadcrumb.path}
          className="text-lg font-sans link outline-none focus:shadow-outline"
        >
          {breadcrumb.title}
          {' '}
        </Link>
        {currentPage && (
          <span className="text-lg hidden md:inline-block" aria-hidden>
            {' '}
            ->{` ${currentPage}`}
          </span>
        )}
      </>
    )}
    {!hideHamburger && (
      <HamburgerMenu isOpen={hamburgerOpen} toggleMenu={toggleHamburger} />
    )}
  </header>
);

export default Header;

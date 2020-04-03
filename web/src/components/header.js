import React from 'react';
import classNames from 'classnames';
import Link from '../components/Link';
import HamburgerMenu from './HamburgerMenu';

const logoClasses = dark =>
  classNames({
    'text-md font-sans outline-none focus:shadow-outline': true,
    link: !dark
  });

const Header = ({
  toggleHamburger,
  hamburgerOpen,
  breadcrumb,
  hideHamburger,
  currentPage
}) => (
  <header>
    <Link slug="/" className={logoClasses(hamburgerOpen)}>
      Netlife
    </Link>
    {breadcrumb && !hamburgerOpen && (
      <>
        <span className="text-md" aria-hidden>
          {' '}
          ->{' '}
        </span>
        <Link
          slug={breadcrumb.path}
          className="text-md font-sans link outline-none focus:shadow-outline"
        >
          {breadcrumb.title}{' '}
        </Link>
        {currentPage && (
          <span className="text-md hidden md:inline-block" aria-hidden>
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

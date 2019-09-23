import React from 'react';
import Link from '../components/Link';
import HamburgerMenu from './HamburgerMenu';

const Header = ({
  toggleHamburger,
  hamburgerOpen,
  breadcrumb,
  hideHamburger
}) => (
  <header>
    <Link
      slug="/"
      className="text-lg font-sans link outline-none focus:shadow-outline"
    >
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
        </Link>
      </>
    )}
    {!hideHamburger && (
      <HamburgerMenu isOpen={hamburgerOpen} toggleMenu={toggleHamburger} />
    )}
  </header>
);

export default Header;

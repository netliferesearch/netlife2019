import { Link } from 'gatsby';
import React from 'react';
import Icon from './icon';

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, breadcrumb }) => (
  <div>
    <div>
      <div>
        <Link to="/" className="text-lg font-sans link">
          Netlife
        </Link>
        {breadcrumb && (
          <>
            <span className="text-lg" aria-hidden>
              {' '}
              ->{' '}
            </span>
            <Link to={breadcrumb.path} className="text-lg font-sans link">
              {breadcrumb.title}
            </Link>
          </>
        )}
      </div>

      {/* {<button onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </button>} */}

      {/* {<nav>
        <ul>
          <li>
            <Link to="/archive/">Archive</Link>
          </li>
        </ul>
      </nav>} */}
    </div>
  </div>
);

export default Header;

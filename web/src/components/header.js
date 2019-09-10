import React from 'react';
import Link from '../components/Link';
import Icon from './icon';

const Header = ({ onHideNav, onShowNav, showNav, breadcrumb }) => (
  <div>
    <div>
      <div>
        <Link slug="/" className="text-lg font-sans link">
          Netlife
        </Link>
        {breadcrumb && (
          <>
            <span className="text-lg" aria-hidden>
              {' '}
              ->{' '}
            </span>
            <Link slug={breadcrumb.path} className="text-lg font-sans link">
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

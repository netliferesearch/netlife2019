import { Link } from 'gatsby';
import React from 'react';
import Icon from './icon';

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div>
    <div>
      <div>
        <Link to="/" className="text-xl">
          {siteTitle}
        </Link>
      </div>

      <button onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </button>

      <nav>
        <ul>
          <li>
            <Link to="/archive/">Archive</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { graphql, useStaticQuery } from 'gatsby';
import Link from './Link';

const navClasses = isOpen =>
  classNames({
    'flex flex-wrap pt-0 md:pt-8': true,
    'sr-only': !isOpen
  });

/* The menu/overlay always exists in the DOM, but it is visually hidden
 * by default. That way it is always accessible to screen readers.
 * This components state will toggle if its visually hidden or not.
 */
const HamburgerMenu = ({ toggleMenu, isOpen }) => {
  const { sanityMenu } = useStaticQuery(
    graphql`
      {
        sanityMenu(name: { eq: "main" }) {
          ...PageLinks
        }
      }
    `
  );

  const menuItems = sanityMenu?.items || [];

  return (
    <>
      <button
        onClick={toggleMenu}
        className="text-md focus:outline-none focus:shadow-outline float-right w-5 text-center"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Hovedmenyknapp"
      >
        {isOpen ? 'X' : ''}
      </button>
      <div className={navClasses(isOpen)}>
        <nav className="w-full md:w-1/2 mt-16">
          <ul>
            {menuItems.map(item => (
              // Closes the hamburger menu if the users selects the current path
              <li key={item._key}>
                <Link
                  slug={item.internalPage?.slug?.current}
                  href={item.url}
                  className="text-md link font-lining hover:text-black outline-none focus:shadow-outline"
                  onClick={toggleMenu}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

HamburgerMenu.propTypes = {
  toggleMenu: PropTypes.func,
  isOpen: PropTypes.bool
};

export default HamburgerMenu;

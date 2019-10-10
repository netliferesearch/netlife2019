import React from 'react';

/**
 * Couple of things to note:
 * - width and height is set to 1em
 * - fill is `currentColor` - this will ensure that the icon looks uniform and
 *   that the hover/active state works. You can of course render anything you
 *   would like here, but for plugins that are to be used in more than one
 *   studio, we suggest these rules are followed
 **/
export default () => (
  <svg
    version="1.1"
    id="Ebene_1"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-12 -12 48 48"
  >
    <path
      fill="currentColor"
      stroke="none"
      d="M14,0C6.3000002,0,0,6.3000002,0,14s6.3000002,14,14,14s14-6.2999992,14-14S21.7000008,0,14,0z M6.1999998,21.7999992
		c-2.0999999-2.1000004-3.2-4.8999996-3.2-7.6000004L13.8999996,25
		C11.1000004,24.8999996,8.3000002,23.8999996,6.1999998,21.7999992z M16.3999996,24.7000008L3.3,11.6000004
		C4.4000001,6.6999998,8.8000002,3,14,3c3.7000008,0,6.8999996,1.8000002,8.8999996,4.5l-1.5,1.3000002C19.7000008,6.5,17,5,14,5
		c-3.8999996,0-7.1999998,2.5-8.5,6L17,22.5c2.8999996-1,5.1000004-3.5,5.7999992-6.5H18v-2h7
		C25,19.2000008,21.2999992,23.6000004,16.3999996,24.7000008z"
    />
  </svg>
);

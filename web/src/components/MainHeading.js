import React from 'react';
import classNames from 'classnames';

const headingClasses = tight =>
  classNames({
    'text-xl -mt-2 md:w-3/4': true,
    'mb-12 md:mb-16': !tight,
    'mb-8': tight
  });

export default ({ tight, children }) => (
  <h1 className={headingClasses(tight)}>{children}</h1>
);

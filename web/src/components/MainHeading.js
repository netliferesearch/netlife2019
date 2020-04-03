import React from 'react';
import classNames from 'classnames';

const headingClasses = tight =>
  classNames({
    'text-lg -mt-2 md:w-3/4': true,
    'mb-12 md:mb-16': !tight,
    'mb-8': tight
  });

export default ({ id, tight, isH2, children }) => {
  return isH2 ? (
    <h2 id={id || ''} className={headingClasses(tight)}>
      {children}
    </h2>
  ) : (
    <h1 id={id || ''} className={headingClasses(tight)}>
      {children}
    </h1>
  );
};

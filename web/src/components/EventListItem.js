import React from 'react';
import PropTypes from 'prop-types';
import formatDates from '../lib/formatDates/formatDates';

const EventListItem = ({ title, dates, slug, children }) => (
  <li className="flex flex-wrap mb-7-5vw">
    <h2 className="text-lg w-full md:w-1/3 order-1 md:order-2">
      <a href={slug} className="font-lining">
        {title}
      </a>
    </h2>
    <p className="text-lg w-full md:w-1/6 order-2 md:order-1">
      {/* Makes two dates have a dash between them, and a linebreak */}
      {formatDates(dates)
        .map(dateString => <time datetime={dateString}>{dateString}</time>)
        .reduce((acc, curr) => [
          acc,
          '–',
          <br className="hidden md:block" />,
          curr
        ])}
    </p>
    <div className="w-full md:w-1/2 order-last">{children}</div>
  </li>
);

EventListItem.propTypes = {
  title: PropTypes.string,
  dates: PropTypes.arrayOf(PropTypes.string),
  slug: PropTypes.string
};

export default EventListItem;
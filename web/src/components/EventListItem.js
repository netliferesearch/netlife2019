import React from 'react';
import PropTypes from 'prop-types';
import { formatDates } from '../lib/formatDates/formatDates';
import Link from '../components/Link';

const EventListItem = ({ title, dates, dateTimes, slug, children }) => (
  <li className="flex flex-wrap mb-12">
    <h2 className="text-lg w-full md:w-3/6 order-1 md:order-2">
      <Link slug={slug} className="font-lining link">
        {title}
      </Link>
    </h2>
    <p className="text-lg w-full md:w-1/6 order-2 md:order-1">
      {/* Makes two dates have a dash between them, and a linebreak */}
      {dates &&
        formatDates(dates)
          .map(dateString => <time dateTime={dateString}>{dateString}</time>)
          .reduce((acc, curr) => [
            acc,
            '–',
            <br className="hidden md:block" />,
            curr
          ])}
    </p>
    <div className="w-full md:w-2/6 order-last">{children}</div>
  </li>
);

EventListItem.propTypes = {
  title: PropTypes.string,
  dates: PropTypes.arrayOf(PropTypes.string),
  slug: PropTypes.string
};

export default EventListItem;

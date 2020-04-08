import React from 'react';
import PropTypes from 'prop-types';
import { formatDates, formatEventDatesShort, formatEventDates } from '../lib/formatDates/formatDates';
import Link from '../components/Link';

const EventListItem = ({ title, dates, dateTimes, slug, children }) => (
  <li className="flex flex-wrap mb-12">
    <h2 className="text-md w-full md:w-3/6 order-1 md:order-2 md:px-8">
      <Link slug={slug} className="font-lining link">
        {title}
      </Link>
    </h2>
    <p className="text-md w-full md:w-1/6 order-2 md:order-1">
      {/* Makes two dates have a dash between them, and a linebreak */}
      {dates &&
      <time dateTime={formatEventDatesShort(dates)}>{formatEventDatesShort(dates)}</time>
      }
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

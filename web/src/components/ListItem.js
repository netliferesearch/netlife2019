import React from 'react';
import PropTypes from 'prop-types';
import formatDates from '../lib/formatDates/formatDates';

const RadioBlock = ({ title, dates, slug, children }) => (
  <li>
    <h2>
      <a href={slug}>{title}</a>
    </h2>
    {formatDates(dates)
      .map(dateString => <time datetime={dateString}>{dateString}</time>)
      .join('-')}
    <>{children}</>
  </li>
);

RadioBlock.propTypes = {
  title: PropTypes.string,
  dateFrom: PropTypes.string,
  dateTo: PropTypes.string,
  intro: PropTypes.string,
  address: PropTypes.string,
  timeFrom: PropTypes.string,
  timeTo: PropTypes.string,
  price: PropTypes.string,
  slug: PropTypes.string
};

export default RadioBlock;

import React from 'react';
import PropTypes from 'prop-types';

import { formatEventDates } from '../lib/formatDates/formatDates'

const EventInfo = ({ eventStart, eventEnd, price, tickets, address }) => {
  let dateString = formatEventDates([eventStart, eventEnd]);

  return (
    <>
      <p className="text-sml">
        <strong>
          Tid: &nbsp;
        </strong>
        {dateString}
      </p>
      <p className="text-sml break-normal">
        <strong>
          Sted: &nbsp;
        </strong>
        <span>
         {address}
        </span>
      </p>
      <p className="text-sml">
        <strong>
          Antall plasser: &nbsp;
        </strong>
        {tickets}
      </p>
      <p className="text-sml">
        <strong>
          {price === 0 || price === null ? 'Gratis' : `${price},- eks. MVA`}
        </strong>
      </p>
    </>
  )
}

EventInfo.propTypes = {
  price: PropTypes.number,
  tickets: PropTypes.number,
  address: PropTypes.string
}

export default EventInfo;

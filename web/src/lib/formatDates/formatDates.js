import { parseISO, format, isSameDay, isSameMonth } from 'date-fns';
import { nb } from 'date-fns/locale';

// Makes dates look like this: 02.12., 15.10.
// Note the 0 padding when there is a single digit.

const formatDateVerbose = date => {
  let finalDate = '';
  const months = [
    {
      month: 1,
      name: 'januar'
    },
    {
      month: 2,
      name: 'februar'
    },
    {
      month: 3,
      name: 'mars'
    },
    {
      month: 4,
      name: 'april'
    },
    {
      month: 5,
      name: 'mai'
    },
    {
      month: 6,
      name: 'juni'
    },
    {
      month: 7,
      name: 'juli'
    },
    {
      month: 8,
      name: 'august'
    },
    {
      month: 9,
      name: 'september'
    },
    {
      month: 10,
      name: 'oktober'
    },
    {
      month: 11,
      name: 'november'
    },
    {
      month: 12,
      name: 'desember'
    }
  ];
  if (date) {
    const dateArray = date.split('.');
    const day = parseInt(dateArray[0], 10);
    const month = parseInt(dateArray[1], 10);
    const year = dateArray[2];
    const monthMatch = months.filter(m => m.month === month);
    if (monthMatch && monthMatch[0]) {
      finalDate = `${day}. ${monthMatch[0].name} ${year}`;
      return finalDate;
    }
  }
  console.warn(`[formatDateVerbose]: date (${date}) is not valid`);
  return null;
};

const formatEventDates = dates => {
  const start = parseISO(dates[0]);
  const end = parseISO(dates[1]);
  let startHour;
  let endHour;
  let startDate;
  let endDate;
  if(isSameDay(start, end)) {
    startDate = format(start, 'do MMMM yyyy', { locale: nb} );
    startHour = format(start, 'HH.mm', { locale: nb })
    endHour = format(end, 'HH.mm', { locale: nb })
    return `${startDate}, kl. ${startHour}–${endHour}`
  } else if (isSameMonth(start, end)) {
    startDate = format(start, 'do', { locale: nb })
    endDate = format(end, 'do MMMM yyyy', { locale: nb })
    startHour = format(start, 'HH.mm', { locale: nb })
    endHour = format(end, 'HH.mm', { locale: nb })
    return `${startDate}–${endDate}, kl. ${startHour}–${endHour}`
  } else {
    startDate = format(start, 'do MMMM', { locale: nb })
    endDate = format(end, 'do MMMM yyyy', { locale: nb })
    startHour = format(start, 'HH.mm', { locale: nb })
    endHour = format(end, 'HH.mm', { locale: nb })
    return `${startDate}–${endDate}, kl. ${startHour}–${endHour}`
  }
};

const formatEventDatesShort = dates => {
  if(dates.length === 1) {
    return formatDates(dates)
  }
  const start = parseISO(dates[0]);
  const end = parseISO(dates[1]);
  let startDate;
  let endDate;
  if(isSameDay(start, end)) {
    startDate = format(start, 'do MMMM', { locale: nb} );
    return `${startDate}`
  } else if (isSameMonth(start, end)) {
    startDate = format(start, 'do', { locale: nb })
    endDate = format(end, 'do MMMM', { locale: nb })
    return `${startDate}–${endDate}`
  } else {
    startDate = format(start, 'do MMMM', { locale: nb })
    endDate = format(end, 'do MMMM', { locale: nb })
    return `${startDate}–${endDate}`
  }
};

const formatDates = dates =>
  dates
    .map(x => parseISO(x))
    .map(date => {
      return format(date, 'do MMMM', { locale: nb });
      // return `${String(date.getDate()).padStart(2, 0)}.${String(
      //   date.getMonth() + 1
      // ).padStart(2, 0)}.`;
    });

const formatFullDate = d => {
  const date = parseISO(d);
  return `${String(date.getDate()).padStart(2, 0)}.${String(
    date.getMonth() + 1
  ).padStart(2, 0)}.${date.getFullYear()}`;
};

const formatFullDateTime = d => {
  const date = parseISO(d);

  return `${String(date.getDate()).padStart(2, 0)}.${String(
    date.getMonth() + 1
  ).padStart(2, 0)}.${date.getFullYear()}. ${String(date.getHours()).padStart(
    2,
    0
  )}:${String(date.getMinutes()).padStart(2, 0)}`;
};

export { formatDateVerbose, formatEventDates, formatEventDatesShort, formatDates, formatFullDate, formatFullDateTime };

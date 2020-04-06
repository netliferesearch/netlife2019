import { parseISO, format } from 'date-fns';
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

const formatDates = dates =>
  dates
    .map(x => parseISO(x))
    .map(date => {
      return format(date, 'do MMMM', {locale: nb})
      // return `${String(date.getDate()).padStart(2, 0)}.${String(
      //   date.getMonth() + 1
      // ).padStart(2, 0)}.`;
      // return date.toLocaleDateString('no-NO', {month: 'long', day: '2-digit'});
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

export { formatDateVerbose, formatDates, formatFullDate, formatFullDateTime };

import { parseISO } from 'date-fns';

// Makes dates look like this: 02.12., 15.10.
// Note the 0 padding when there is a single digit.

const formatDates = dates =>
  dates
    .map(x => parseISO(x))
    .map(date => {
      return `${String(date.getDate()).padStart(2, 0)}.${String(
        date.getMonth() + 1
      ).padStart(2, 0)}.`;
    });

const formatFullDate = d => {
  const date = parseISO(d);
  return `${String(date.getDate()).padStart(2, 0)}.${String(
    date.getMonth() + 1
  ).padStart(2, 0)}.${date.getFullYear()}`;
};

export { formatDates, formatFullDate };

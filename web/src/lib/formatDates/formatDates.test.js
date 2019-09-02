import { formatDates, formatFullDate } from './formatDates';

test('One date should show day and month formatted', () => {
  expect(formatDates(['2019-02-12'])).toEqual(['12.02.']);
});

test('Two dates should return two formatted strings in an array', () => {
  expect(formatDates(['3019-05-09', '3019-05-10'])).toEqual([
    '09.05.',
    '10.05.'
  ]);
});

test('There should be no aditional padding with this date', () => {
  expect(formatDates(['2019-11-12'])).toEqual(['12.11.']);
});

test('The date should have norwegian formatting with dots', () => {
  expect(formatFullDate('2019-10-31')).toEqual('31.10.2019');
});

test('The date should have norwegian formatting with padding (0)', () => {
  expect(formatFullDate('2020-01-02')).toEqual('02.01.2020');
});

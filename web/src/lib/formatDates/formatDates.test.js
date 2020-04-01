import { formatDateVerbose, formatDates, formatFullDate } from './formatDates';

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

describe('Format date to a fully verbose Norwegian format', () => {
  it(`Return '14. januar 2019' out of '14.01.2019'`, () => {
    const testInput = '14.01.2019';
    const testOutput = '14. januar 2019';
    expect(formatDateVerbose(testInput)).toEqual(testOutput);
  });
  it(`Return '8. august 2018' out of '08.08.2018'`, () => {
    const testInput = '08.08.2018';
    const testOutput = '8. august 2018';
    expect(formatDateVerbose(testInput)).toEqual(testOutput);
  });
  it(`Return '12. desember 2012' out of '12.12.2012'`, () => {
    const testInput = '12.12.2012';
    const testOutput = '12. desember 2012';
    expect(formatDateVerbose(testInput)).toEqual(testOutput);
  });
});

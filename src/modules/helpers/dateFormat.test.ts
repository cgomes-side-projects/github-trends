import { dateToISO8601 } from './dateFormat';

jest.useFakeTimers().setSystemTime(new Date('2023-01-01'));

test('should return date formatted as YYYY-MM-DD', () => {
  const today = new Date();

  expect(dateToISO8601(today)).toBe('2023-01-01');
});

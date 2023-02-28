/**
 * Formats a date to "YYYY-MM-DD"
 */
export function dateToISO8601(date: Date): string {
  const year = date.getFullYear();
  const month = ['0', date.getMonth() + 1].join('').slice(-2);
  const day = ['0', date.getDate()].join('').slice(-2);
  return `${year}-${month}-${day}`;
}

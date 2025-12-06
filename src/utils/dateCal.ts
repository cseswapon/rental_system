export function getDaysBetweenDates(dateA: string, dateB: string) {
  const d1 = new Date(dateA);
  const d2 = new Date(dateB);

  const diffTime = Math.abs(d2.getTime() - d1.getTime());

  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

export function compareDate(dateA: string, dateB: string): boolean {
  const d1 = new Date(dateA);
  const d2 = new Date(dateB);
  return d1 <= d2;
}

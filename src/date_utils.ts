export class DateCalc{

  daysBetweenDates(date1: Date, date2: Date): number {
    const oneDay = 24 * 60 * 60 * 1000; // number of milliseconds in a day
    const diffInTime = Math.abs(date2.getTime() - date1.getTime());
    const diffInDays = Math.round(diffInTime / oneDay);
    return diffInDays;
  }

  isMoreThan7DaysApart(date1: Date, date2: Date): boolean {
    const timeDifferenceInMs = Math.abs(date2.getTime() - date1.getTime());
    const daysApart = Math.floor(timeDifferenceInMs / (1000 * 60 * 60 * 24));
    return daysApart > 7;
  }

  isLessThan7DaysApart(date1: Date, date2: Date): boolean {
    const timeDifferenceInMs = Math.abs(date2.getTime() - date1.getTime());
    const daysApart = Math.floor(timeDifferenceInMs / (1000 * 60 * 60 * 24));
    return daysApart < 7;
  }

  isDateBeforeToday(date: Date): boolean {
      const today = new Date();
      return date < today;
  }
}
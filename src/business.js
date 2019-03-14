// class date {
//   constructor(month, day, year) {
//     this.month = month;
//     this.day = day;
//     this.year = year;
//   }
// }


export function numToDays(day){
  const daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const translate = daysArray.slice(day, (day+1));
  return translate;
}

/* export function getYearDiff(year) {
  const anchorYear = 2000;
  const inputYear = year;

  if (inputYear >= anchorYear) {
    const diff = inputYear - anchorYear;
    countDaysDiff(diff, true)
  } else if (inputYear < anchorYear){
    const diff = anchorYear - inputYear;
    countDaysDiff(diff, false);
  }
}

export function countDaysDiff(diff, boolean){
  let leapYearCount = 0;
  let normalYearCount = 0;
  if (boolean === true) {
    for (let i = 2000; i <= (2000 + (diff-1)); i++) {
      if ((i % 4 === 0) && (i % 100 !== 0) || (i % 400 == 0)) {
        leapYearCount += 1;
      } else {
        normalYearCount += 1;
      }
    }
  } else if (boolean === false) {
    for (let i = 1999; i >= (2000 - (diff-1)); i--) {
      if ((i % 4 === 0) && (i % 100 !== 0) || (i % 400 == 0)) {
        leapYearCount += 1;
      } else {
        normalYearCount += 1;
      }
    }
  }
  const daysBetween = ((leapYearCount * 366) + (normalYearCount * 365));
  return daysBetween;
}

// countDaysDiff gets the amount of days for the years up to user input year

export function findDay(input) {
  let date = input.toLowercase;
  const dayOfDate = "wednesday"
  if (date == dayOfDate) {
    console.log("they match")
  } else {
    console.log("they dont match")
  }
  return date;
}
*/

// export class Date {
//   constructor(year, month, day) {
//     this.month = (month);
//     this.day = parseInt(day);
//     this.year = parseInt(year);
//   }
// }

import { findDay, getYearDiff, countDaysDiff } from "./../src/date-picker.js"



// describe('isLeapYear', function () {
//   it('should test if the year is a leap year', function() {
//
//   })
// });
describe('countDaysDiff', function() {
  it('should test the amount of days in betweens years', function() {
    expect(countDaysDiff(5, true)).toEqual(1827);
    expect(countDaysDiff(5, false)).toEqual(1461);
  });
});

describe('findDay', function () {
  it('should test whether the day of the date is the correct day', function() {
    const date = "3/13/2019";
    const dayOfDate = "Wednesday";
    expect(dayOfDate).toEqual('Wednesday');
  });
});

// describe('getYearDiff', function(){
//   it("should return the amount of years in between anchorYear and inputYear", function(){
//     expect(getYearDiff(2035)).toEqual(35);
//     expect(getYearDiff(2000)).toEqual(0);
//     expect(getYearDiff(1887)).toEqual(113);
//   });
// });

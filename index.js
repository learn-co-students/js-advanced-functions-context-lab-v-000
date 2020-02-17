/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


function createEmployeeRecord(array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  };
};

function createEmployeeRecords(array) {
  return array.map(e => createEmployeeRecord(e));
};

function createTimeInEvent(dateTime) {
  this.timeInEvents.push({
    type: "TimeIn",
    date: dateTime.split(" ")[0],
    hour: parseInt(dateTime.split(" ")[1])});
  return this;
};

function createTimeOutEvent(dateTime) {
  this.timeOutEvents.push({
    type: "TimeOut",
    date: dateTime.split(" ")[0],
    hour: parseInt(dateTime.split(" ")[1])});
  return this;
};

function hoursWorkedOnDate(date) {
  const timeIn = this.timeInEvents.filter(element => element.date === date).reduce(function(accumulator, currentElement) {
    return accumulator + currentElement.hour;
  }, 0);
  const timeOut = this.timeOutEvents.filter(element => element.date === date).reduce(function(accumulator, currentElement) {
    return accumulator + currentElement.hour;
  }, 0);
  return (timeOut - timeIn) / 100;
};

function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour;
};

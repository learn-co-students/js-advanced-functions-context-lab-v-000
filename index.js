function createEmployeeRecord(array) {
  let record = {};
  record.firstName = array[0];
  record.familyName = array[1];
  record.title = array[2];
  record.payPerHour = array[3];
  record.timeInEvents = [];
  record.timeOutEvents = [];
  return record;
}

function createEmployeeRecords(arrayOfArrays) {
  return arrayOfArrays.map(array => createEmployeeRecord(array));
}

let createTimeInEvent = function(dateTime) {
  let dateArray = dateTime.split(" ");
  let date = dateArray[0];
  let time = dateArray[1];
  let e = Object.create(Object.prototype, {
    type: { value: "TimeIn" },
    date: { value: date },
    hour: { value: Number(time) }
  });
  this.timeInEvents.push(e);
  return this;
};

let createTimeOutEvent = function(dateTime) {
  let dateArray = dateTime.split(" ");
  let date = dateArray[0];
  let time = dateArray[1];
  let e = Object.create(Object.prototype, {
    type: { value: "TimeOut" },
    date: { value: date },
    hour: { value: Number(time) }
  });
  this.timeOutEvents.push(e);
  return this;
};

let hoursWorkedOnDate = function(date) {
  let timeIn = this.timeInEvents.find(event => event.date == date).hour / 100;
  let timeOut = this.timeOutEvents.find(event => event.date == date).hour / 100;
  return timeOut - timeIn;
};

let wagesEarnedOnDate = function(date) {
  let wages = hoursWorkedOnDate.call(this, date) * this.payPerHour;
  return wages;
};

// function allWagesFor(emp) {
//   let daysWorked = emp.timeInEvents.map(e => e.date);

//   let payOwed = daysWorked.reduce(function(accumulator, currentValue) {
//     return accumulator + wagesEarnedOnDate(emp, currentValue);
//   }, 0);

//   return payOwed;
// }

function calculatePayroll(arr) {
  let amounts = arr.map(e => allWagesFor.call(e));
  debugger;
  let payroll = amounts.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);

  return payroll;
}

function findEmployeeByFirstName(source, query) {
  return source.find(e => e.firstName == query);
}

let allWagesFor = function() {
  let eligibleDates = this.timeInEvents.map(function(e) {
    return e.date;
  });

  let payable = eligibleDates.reduce(
    function(memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};

/* Your Code Here */
function createEmployeeRecord(employeeInfo) {
  return Object.assign({}, {
    firstName: employeeInfo[0],
    familyName: employeeInfo[1],
    title: employeeInfo[2],
    payPerHour: employeeInfo[3],
    timeInEvents: [],
    timeOutEvents: [],
  });
}

function createEmployeeRecords(employeesInfo) {
  return employeesInfo.map(employeeInfo => createEmployeeRecord(employeeInfo));
}

function createTimeInEvent(timeIn) {
  let timeInObj = {
    type: "TimeIn",
    date: timeIn.split(" ")[0],
    hour: parseInt(timeIn.split(" ")[1]),
  };
  this.timeInEvents.push(timeInObj);
  return this;
}

function createTimeOutEvent(timeOut) {
  let timeOutObj = {
    type: "TimeOut",
    date: timeOut.split(" ")[0],
    hour: parseInt(timeOut.split(" ")[1]),
  };
  this.timeOutEvents.push(timeOutObj);
  return this;
}

function hoursWorkedOnDate(date) {
  let timeIn = this.timeInEvents.find(timeInEvent => {
    return timeInEvent.date === date;
  });
  let timeOut = this.timeOutEvents.find(timeOutEvent => {
    return timeOutEvent.date === date;
  });
  return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

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

function calculatePayroll(employees) {
  return employees.reduce((totalPay, employee) => {
    return allWagesFor.call(employee) + totalPay;
  }, 0);
}

function findEmployeeByFirstName(employees, name) {
  return employees.find(employee => {
    return employee.firstName === name;
  });
}

/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

/*
function allWagesFor(employee) {
  let wagesEarned = employee.timeInEvents.map(function (dateTime) {
    return wagesEarnedOnDate(employee, dateTime.date);
  })
  return wagesEarned.reduce((total, wage) => wage + total);
}
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

function createEmployeeRecord(arr) {
  const employee = {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  };
  return employee;
}

function createEmployeeRecords(arr) {
  const employees = arr.map(function (employee) {
    return createEmployeeRecord(employee);
  });
  return employees;
}

function createTimeInEvent(date) {
  const dateTime = date.split(" ");
  const stamp = {
    type: "TimeIn",
    date: dateTime[0],
    hour: Number(dateTime[1])
  }
  this.timeInEvents.push(stamp);
  return this;
}

function createTimeOutEvent(date) {
  const dateTime = date.split(" ");
  const stamp = {
    type: "TimeOut",
    date: dateTime[0],
    hour: Number(dateTime[1])
  }
  this.timeOutEvents.push(stamp);
  return this;
}

function hoursWorkedOnDate(date) {
  const start = this.timeInEvents.find(time => time.date === date);
  const end = this.timeOutEvents.find(time => time.date === date);
  return (end.hour - start.hour) / 100;
}

function wagesEarnedOnDate(date) {
  let bound = hoursWorkedOnDate.bind(this);
  return this.payPerHour * bound(date);
}

/*
function calculatePayroll(employees) {
  const wagesEarned = employees.map(function (employee) {
    return allWagesFor(employee);
  })
  return wagesEarned.reduce((total, wage) => wage + total)
}
*/

function calculatePayroll(employeeRecords) {
  let wageEarned = employeeRecords.map(function (e) {
    return allWagesFor.bind(e)();
  })
  return wageEarned.reduce((total, wage) => wage + total);
}

/*
function findEmployeeByFirstName(employees, firstName) {
  return employees.find(employee => employee.firstName === firstName)
}
*/

function findEmployeeByFirstName(employees, firstName) {
  return employees.find(e => e.firstName === firstName)
}

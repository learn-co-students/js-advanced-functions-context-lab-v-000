/* Your Code Here */

let createEmployeeRecord = function(empDataArray) {
  /* return Object.assign({ // This doesn't work; call, apply, and bind can't be called on Object.assign
    firstName: this[0]
  }).apply(empDataArray) */
  return {
    firstName: empDataArray[0], familyName: empDataArray[1],
    title: empDataArray[2], payPerHour: empDataArray[3],
    timeInEvents: [], timeOutEvents: []
  }
}
/* I think what I was trying to do would only work like this:
  function createEmpName() {
    return { firstName: this[0], lastName: this[1] }
  }

  createEmpName.call(["Elon", "Musk"]) //=> { firstName: 'Elon', lastName: 'Musk' }

  Update: I could use call, apply, or bind on Object.assign like this: Object.assign.call(empDataArray, {}, {firstName: this[0]})
  However, that wouldn't work either, as it returns { firstName: undefined }.
*/

let createEmployeeRecords = function(employeesArray) {
  return employeesArray.map(createEmployeeRecord)
}

let createTimeInEvent = function(timeIn) {
  const [date, hour] = timeIn.split(" ");

  this.timeInEvents.push({
    type: "TimeIn", date: date, hour: Number(hour)
  });
  // Note: hour: parseInt(hour, 10) also works.

  return this;
}

let createTimeOutEvent = function(timeOut) {
  const [date, hour] = timeOut.split(" ");

  this.timeOutEvents.push({
    type: "TimeOut", date: date, hour: Number(hour)
  });

  return this;
}

let hoursWorkedOnDate = function(date) {
  let timeInEvent = this.timeInEvents.find( event => event.date === date );
  let timeOutEvent = this.timeOutEvents.find( event => event.date === date );

  return (timeOutEvent.hour - timeInEvent.hour) / 100
}

let wagesEarnedOnDate = function(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour
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

let findEmployeeByFirstName = function(employees, firstNameString) {
  return employees.find( e => e.firstName === firstNameString )
}

let calculatePayroll = function(empRecords) {
  return empRecords.reduce(function(memo, employee) {
    return memo + allWagesFor.call(employee)
  }, 0)
}
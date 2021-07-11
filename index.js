/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let createEmployeeRecord = function(employeeData) {
  return {
    firstName: employeeData[0],
    familyName: employeeData[1],
    title: employeeData[2],
    payPerHour: employeeData[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

let createEmployeeRecords = function(employeeDatum) {
  return employeeDatum.map(function(employeeData) {
    return createEmployeeRecord(employeeData);
  });
}

let createTimeInEvent = function(clockIn) {
  let [date, hour] = clockIn.split(' ');

  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date
  })

  return this
}

let createTimeOutEvent = function(clockOut) {
  let [date, hour] = clockOut.split(' ');

  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date
  })

  return this
}

let hoursWorkedOnDate = function(date) {
  let checkIn = this.timeInEvents.find(checkIn => checkIn.date === date);
  let checkOut = this.timeOutEvents.find(checkOut => checkOut.date === date);
  return (checkOut.hour - checkIn.hour)/100
}

let wagesEarnedOnDate = function(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

let allWagesFor = function() {
  let eligibleDates = this.timeInEvents.map(function (e) {
    return e.date
  })

  let payable = eligibleDates.reduce(function (memo, d) {
    return memo + wagesEarnedOnDate.call(this, d)
  }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable
}

// This follows reduce function explicit context setting as above
let calculatePayroll = function(arrayOfEmployeeRecords){
  return arrayOfEmployeeRecords.reduce(function(memo, rec){
      return memo + allWagesFor.call(rec)
  }, 0)
}

// let calculatePayroll = function(employeeRecords) {
//   let employeeWages = employeeRecords.forEach(employeeRecord => {
//     allWagesFor(employeeRecord);
//   });
//   return employeeWages.reduce((memo, wages) => memo + wages);
// }

let findEmployeeByFirstName = function(employeeRecords, firstName) {
  return employeeRecords.find(employeeRecord => employeeRecord.firstName === firstName);
}
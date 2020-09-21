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

let createEmployeeRecord = function(employeeAry){
  let employee = {
    firstName: employeeAry[0],
    familyName: employeeAry[1],
    title: employeeAry[2],
    payPerHour: employeeAry[3],
    timeInEvents: [],
    timeOutEvents: []
  }

  return employee
}

let createEmployeeRecords = function(aryAry){
  let employeeRecords = aryAry.map(function (e){
    return createEmployeeRecord(e)
  })

  return employeeRecords
}

let createTimeInEvent = function(date){
  let timeInEvent = {
    type: "TimeIn",
    hour: parseInt(date.split(" ")[1]),
    date: date.split(" ")[0]
  }
  let employee = this
  employee.timeInEvents.push(timeInEvent)

  return employee
}

let createTimeOutEvent = function(date){
  let timeOutEvent = {
    type: "TimeOut",
    hour: parseInt(date.split(" ")[1]),
    date: date.split(" ")[0]
  }
  let employee = this
  employee.timeOutEvents.push(timeOutEvent)

  return employee
}

let hoursWorkedOnDate = function(date){
  let timeIn = this.timeInEvents.find(s => s.date === date).hour;
  let timeOut = this.timeOutEvents.find(s => s.date === date).hour;

  return (timeOut - timeIn)/100;
}

let wagesEarnedOnDate = function(date){
  return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

let findEmployeeByFirstName = function(employeeRecords, firstNameString){
  return employeeRecords.find(employee => employee.firstName == firstNameString);
}

// Argument(s)
// Array of employee records
let calculatePayroll = function(employeeRecords){
  let payrole = 0

  // employeeRecords.forEach(employee => {
  //   payrole += allWagesFor(employee)
  // })
  // Behavior
  // Using wagesEarnedOnDate, accumulate the value of all dates worked by the employee in the record used as context. Amount should be returned as a number.

  // Returns
  // Pay owed for all dates
  // return payrole
  return employeeRecords.reduce((payrole, employee) => payrole + allWagesFor(employee))
}


// const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
//
// // Code your solution here
//
// let totalBatteries = batteryBatches.reduce((total, element) => element + total)

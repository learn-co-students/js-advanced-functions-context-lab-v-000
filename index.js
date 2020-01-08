/* Your Code Here */
let createEmployeeRecord = function(sourceArray) {
  let employeeRecord = {
    firstName: sourceArray[0],
    familyName: sourceArray[1],
    title: sourceArray[2],
    payPerHour: sourceArray[3],
    timeInEvents: [],
    timeOutEvents: []
  }
  return employeeRecord
}

let createEmployeeRecords = function(sourceArrays) {
  return sourceArrays.map(array => createEmployeeRecord(array))
}

let createTimeInEvent = function(stamp) {
  let stampArr = stamp.split(" ")
  let timeEvent = {
    type: "TimeIn",
    hour: parseInt(stampArr[1]),
    date: stampArr[0]
  }
  this.timeInEvents.push(timeEvent)
  return this
}

let createTimeOutEvent = function(stamp) {
  let stampArr = stamp.split(" ")
  let timeEvent = {
    type: "TimeOut",
    hour: parseInt(stampArr[1]),
    date: stampArr[0]
  }
  this.timeOutEvents.push(timeEvent)
  return this
}

let hoursWorkedOnDate = function(dateStr) {
  let outEvent = this.timeOutEvents.find(item => item.date === dateStr)
  let inEvent = this.timeInEvents.find(item => item.date === dateStr)
  let hoursWorked = (outEvent.hour - inEvent.hour)/100
  return hoursWorked
}

let wagesEarnedOnDate = function(dateStr) {
  return hoursWorkedOnDate.call(this, dateStr) * this.payPerHour
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

let findEmployeeByFirstName = function(sourceArray, firstName) {
  let empRec = sourceArray.find(record => record.firstName = firstName)
  return empRec
}

let calculatePayroll = function(sourceArray) {
  let payroll = sourceArray.map(record => allWagesFor.call(record))
  let allPayroll = payroll.reduce((total, element) => element + total, 0)
  return allPayroll
}

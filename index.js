/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 function  allWagesFor() {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(record) {
  return {
    firstName: record[0],
    familyName: record[1],
    title: record[2],
    payPerHour: record[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(records) {
  return records.map(record => createEmployeeRecord(record) )
}

function createTimeInEvent(dateStamp) {
  let dateAndHour = dateStamp.split(" ")
  this.timeInEvents.push({
    type: "TimeIn",
    date: dateAndHour[0],
    hour: parseInt(dateAndHour[1])
  })
  return this
}

function createTimeOutEvent(dateStamp) {
  let dateAndHour = dateStamp.split(" ")
  this.timeOutEvents.push({
    type: "TimeOut",
    date: dateAndHour[0],
    hour: parseInt(dateAndHour[1])
  })
  return this
}

function hoursWorkedOnDate(date) {
  let outHour = this.timeOutEvents.find(element => element.date === date).hour
  let inHour = this.timeInEvents.find(element => element.date === date).hour
  return (outHour - inHour) /100
}

function wagesEarnedOnDate(dateStamp) {
  let hours = hoursWorkedOnDate.call(this, dateStamp)
  return hours * this.payPerHour
}


function calculatePayroll(records) {
  return records.reduce((total, employee) => total + allWagesFor.call(employee), 0)
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName == firstName)
}
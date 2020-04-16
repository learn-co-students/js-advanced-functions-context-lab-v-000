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
    }
}

function createEmployeeRecords(array) {
    return array.map(record => createEmployeeRecord(record))
}

function createTimeInEvent(dateStamp) {
    let [date, hour] = dateStamp.split(" ")
    this.timeInEvents.push({
      type: 'TimeIn',
      hour: parseInt(hour, 10),
      date
    })
    return this
  }

function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date
    })
    return this
}

function hoursWorkedOnDate(dateStamp) {
    let timeInDate = this.timeInEvents.find(e => e.date == dateStamp)
    let timeOutDate = this.timeOutEvents.find(e => e.date == dateStamp)
    let hoursWorked = (timeOutDate.hour - timeInDate.hour) / 100;
    return hoursWorked
}

// const wagesEarnedOnDate = (dateStamp) => {
//     let wagesEarned = hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour
//     return wagesEarned
//   }
  function wagesEarnedOnDate(dateStamp) {
    let wage = hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour
    return parseFloat(wage.toString())
}

function allWagesFor() {
    let datesWorked = this.timeInEvents.map(event => event.data)
    let wages = datesWorked.reduce((total, date) => {
        return total += wagesEarnedOnDate(date)
    }, 0)
    return wages
}

function findEmployeeByFirstName(employees, firstName) {
    return employees.find(employee => employee.firstName == firstName)
}
function calculatePayroll(employees) {
    return employees.reduce((total, employee) => {
        return total += allWagesFor.call(employee)
    }, 0)
}
function createEmployeeRecord(employeeInfo) {
  return {
    firstName: employeeInfo[0],
    familyName: employeeInfo[1],
    title: employeeInfo[2],
    payPerHour: employeeInfo[3],
    timeInEvents: [],
    timeOutEvents: []
  };
};

function createEmployeeRecords(employees) {
  return employees.map(e => createEmployeeRecord(e))
};

let createTimeInEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return this
};

function hoursWorkedOnDate(date){
    let clockIn = this.timeInEvents.find(function(e){
        return e.date === date
    })

    let clockOut = this.timeOutEvents.find(function(e){
        return e.date === date
    })

    return (clockOut.hour - clockIn.hour) / 100
};

function wagesEarnedOnDate(date) {
    let wagesEarned = hoursWorkedOnDate.call(this, date) * this.payPerHour
    return parseFloat(wagesEarned.toString())
}

function calculatePayroll(employees) {
  return employees.reduce((runningTotal, employee) => runningTotal + allWagesFor.call(employee), 0);
};

function findEmployeeByFirstName(employeeRecords, firstName) {
  return employeeRecords.find(employeeRecord => employeeRecord.firstName === firstName);
};

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

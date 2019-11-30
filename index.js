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

const createEmployeeRecord = function(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = function(arrOfArrays) {
    return arrOfArrays.map(array => createEmployeeRecord(array))
}

const createTimeInEvent = function(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    this.timeInEvents.push({
        type: 'TimeIn',
        date: date,
        hour: parseInt(hour, 10)
    });
    return this;
}

const createTimeOutEvent = function(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    this.timeOutEvents.push({
        type: 'TimeOut',
        date: date,
        hour: parseInt(hour, 10)
    });
    return this;
}

const hoursWorkedOnDate = function(date) {
    const timeInObj = this.timeInEvents.find(element => element.date === date)
    const timeOutObj = this.timeOutEvents.find(element => element.date === date)

    return (timeOutObj.hour / 100) - (timeInObj.hour / 100)
}

const wagesEarnedOnDate = function(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

const calculatePayroll = function(arrOfEmployees) {
    return arrOfEmployees.reduce((total, employeeObj) => {
        return allWagesFor.call(employeeObj) + total
    }, 0)
}

const findEmployeeByFirstName = function(srcArray, firstName) {
    return srcArray.find(element => element.firstName === firstName)
}
/* Your Code Here */

/*
We're giving you this function. Take a look at it, you might see some usage
that's new and different. That's because we're avoiding a well-known, but
sneaky bug that we'll cover in the next few lessons!

    As a result, the lessons for this function will pass *and* it will be available
    for you to use if you need it!
 */

function createEmployeeRecord(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(array){
    return array.map(empArray => createEmployeeRecord(empArray))
}

function createTimeInEvent(date){
    let dateArr = date.split(" ")
    let e = {
        type: "TimeIn",
        hour: parseInt(dateArr[1]),
        date: dateArr[0]
    }
    this.timeInEvents.push(e)
    return this
}
function createTimeOutEvent(date){
    let dateArr = date.split(" ")
    let e = {
        type: "TimeOut",
        hour: parseInt(dateArr[1]),
        date: dateArr[0]
    }
    this.timeOutEvents.push(e)
    return this
}

function hoursWorkedOnDate(date){
    let timeInEvent = this.timeInEvents.find(e => e.date === date).hour/100
    let timeOutEvent = this.timeOutEvents.find(e => e.date === date).hour/100
    return timeOutEvent - timeInEvent
}

function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function calculatePayroll(array){
    let payroll = array.reduce((memo, record) => {
        return memo + allWagesFor.call(record)
    }, 0)
    return payroll
}

function findEmployeeByFirstName(collection, name){
    return collection.find(record => record.firstName === name)
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
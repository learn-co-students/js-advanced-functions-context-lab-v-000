/* Your Code Here */

let createEmployeeRecord = function(array) {
    
    return {firstName: array[0], familyName: array[1], title: array[2], payPerHour: array[3], timeInEvents: [],
        timeOutEvents: []}
}

let createEmployeeRecords= function(array) {
    return array.map(record => createEmployeeRecord(record))
}

let createTimeInEvent = function(date) {
    const info = date.split(' ')
    this.timeInEvents.push({type: "TimeIn", hour: parseInt(info[1]), date: info[0]})
    return this
}
// updatedBpRecord = createTimeInEvent.call(bpRecord, "2014-02-28 1400")

let createTimeOutEvent = function(date) {
    const info = date.split(' ')
    this.timeOutEvents.push({type: "TimeOut", hour: parseInt(info[1]), date: info[0]})
    return this
}

let hoursWorkedOnDate = function(date) {
    let timeOut = this.timeOutEvents.find(element => element.date === date)
    let timeIn = this.timeInEvents.find(element => element.date === date)
    return (timeOut.hour - timeIn.hour)/100
}

let wagesEarnedOnDate = function(date) {
    let wages = this.payPerHour
    return hoursWorkedOnDate.call(this, date) * wages;
}

let calculatePayroll = function(employeeRecords) {
    return employeeRecords.reduce( (total, element) => allWagesFor.call(element) + total, 0);
}

let findEmployeeByFirstName = function(employees, firstName) {
    return employees.find(element => element.firstName === firstName)
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

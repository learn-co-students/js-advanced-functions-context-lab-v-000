let createEmployeeRecord = function(employeeArray) {
    let employee = {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee;
}

let createEmployeeRecords = function(employeesArray) {}

let createTimeInEvent = function(dateStamp) {}

let createTimeOutEvent = function(dateStamp) {}

let hoursWorkedOnDate = function(date) {}

let wagesEarnedOnDate = function(date) {}

let allWagesFor = function() {
    let eligibleDates = this.timeInEvents.map(function(e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function(memo, d) {
            return memo + wagesEarnedOnDate.call(this, d)
        }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

let findEmployeeByFirstName = function(employeeArray, firstName) {}


let calculatePayroll = function(employeesArray) {}
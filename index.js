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

let createEmployeeRecords = function(employeesArray) {
    return employeesArray.map(function(employee) {
        return createEmployeeRecord(employee)
    })
}

let createTimeInEvent = function(dateStamp) {
    let dateSplit = dateStamp.split(' ')
    this.timeInEvents.push({
        type: 'TimeIn',
        date: dateSplit[0],
        hour: Number(dateSplit[1])
    })
    return this;
}

let createTimeOutEvent = function(dateStamp) {
    let dateSplit = dateStamp.split(' ')
    this.timeOutEvents.push({
        type: 'TimeOut',
        date: dateSplit[0],
        hour: Number(dateSplit[1])
    })
    return this;
}


let hoursWorkedOnDate = function(date) {
    let timeIn = this.timeInEvents.find(function(d) {
        return d.date === date;
    })
    let timeOut = this.timeOutEvents.find(function(d) {
        return d.date === date;
    })

    return (timeOut.hour - timeIn.hour) / 100;
}

let wagesEarnedOnDate = function(date) {
    let wages = hoursWorkedOnDate.call(this, date) * this.payPerHour;
    return parseFloat(wages.toString())
}

let allWagesFor = function() {
    let eligibleDates = this.timeInEvents.map(function(e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function(memo, d) {
            return memo + wagesEarnedOnDate.call(this, d)
        }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

let findEmployeeByFirstName = function(employeesArray, firstName) {
    return employeesArray.find(function(e) {
        return e.firstName === firstName;
    })
}


let calculatePayroll = function(employeesArray) {
    return employeesArray.reduce(function(memo, employee) {
        return memo + allWagesFor.call(employee)
    }, 0)
}
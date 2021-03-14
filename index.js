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



function createEmployeeRecord(dataArray) {
    return {
        firstName: dataArray[0],
        familyName: dataArray[1],
        title: dataArray[2],
        payPerHour: Number(dataArray[3]),
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(dataArrays) {
    return dataArrays.map((dataArray) => createEmployeeRecord(dataArray))
}

function createTimeInEvent(timestamp) {
    const timeInEvent = {
        type: "TimeIn",
        hour: +timestamp.split(" ")[1],
        date: timestamp.split(" ")[0],
        timestamp: timestamp
    }
    this.timeInEvents.push(timeInEvent)
    return this
}

function createTimeOutEvent(timestamp) {
    const timeOutEvent = {
        type: "TimeOut",
        hour: +timestamp.split(" ")[1],
        date: timestamp.split(" ")[0],
        timestamp: timestamp
    }
    this.timeOutEvents.push(timeOutEvent)
    return this
}

function hoursWorkedOnDate(timestamp) {
    const findByTimeEvent = (timeEvent) => { return timeEvent.date === timestamp.split(" ")[0] }

    const [hourIn, hourOut] = [
        convertTimestampToDate(this.timeInEvents.find(findByTimeEvent).timestamp).getHours(),
        convertTimestampToDate(this.timeOutEvents.find(findByTimeEvent).timestamp).getHours()
    ]
    return Number(hourOut - hourIn)
}

function wagesEarnedOnDate(timestamp) {
    return hoursWorkedOnDate.call(this, timestamp) * this.payPerHour
}

// function allWagesFor(employee) {
//     const allWages = employee.timeOutEvents.map((timeEvent) => wagesEarnedOnDate.call(this, timeEvent.date))
//     return allWages.reduce((total, currentValue) => total + currentValue)
// }

function findEmployeeByFirstName(employees, firstName) {
    return employees.find((employee) => employee.firstName === firstName)
}

function calculatePayroll(employees) {
    const employeeWages = employees.map((employee) => allWagesFor.call(employee))

    return employees.map((employee) => allWagesFor.call(employee)).reduce((total, currentValue) => currentValue += total)
}

function convertTimestampToDate(timestamp) {
    const time = timestamp.replace(" ", "T").split("")
    time.splice(-2, 0, ":")
    if (time.length === 14) {
        time.unshift('0')
        time.unshift('0')
    }
    return new Date(time.join(""))
}
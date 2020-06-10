const createEmployeeRecord = (array) => {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = (arrayOfArrays) => {
    return arrayOfArrays.map(array => {
        return createEmployeeRecord(array)
    })
}

const createTimeInEvent = function(dateTimeStamp) {
    const dateArray = dateTimeStamp.split(" ")
    this.timeInEvents.push(
        {
            type: "TimeIn",
            hour: parseInt(dateArray[1], 10),
            date: dateArray[0]
        }
    )
    return this
}

const createTimeOutEvent = function(dateTimeStamp) {
    const dateArray = dateTimeStamp.split(" ")
    this.timeOutEvents.push(
        {
            type: "TimeOut",
            hour: parseInt(dateArray[1], 10),
            date: dateArray[0]
        }
    )
    return this
}

const hoursWorkedOnDate = function(dateTimeStamp) {
    const timeIn = this.timeInEvents.find(punch => punch.date === dateTimeStamp)
    const timeOut = this.timeOutEvents.find(punch => punch.date === dateTimeStamp)
    
    return (timeOut.hour - timeIn.hour) / 100
}

const wagesEarnedOnDate = function(dateTimeStamp) {
    const hours = hoursWorkedOnDate.call(this, dateTimeStamp)
    const payRate = this.payPerHour
    
    return (hours * payRate) 
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const findEmployeeByFirstName = (employees, firstName) => {
    return employees.find(employee => employee.firstName === firstName)
}

const calculatePayroll = (employees) => {
    return employees.reduce((accumulator, employee) => accumulator + allWagesFor.call(employee), 0)
}
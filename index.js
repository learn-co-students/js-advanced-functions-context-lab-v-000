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

let createEmployeeRecord = infoArray => {
    return {
        firstName: infoArray[0],
        familyName: infoArray[1],
        title: infoArray[2],
        payPerHour: infoArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = employeeRecordsArray => {
    return employeeRecordsArray.map ( record => {
        return createEmployeeRecord(record)
    })
}

let createTimeInEvent = function(timeInfo){
    let timeInEvent = {
        type: "TimeIn",
        date: timeInfo.split(" ")[0],
        hour: parseInt(timeInfo.split(" ")[1])
    }
    
    this.timeInEvents.push(timeInEvent)

    return this
}

let createTimeOutEvent = function(timeInfo){
    let timeOutEvent = {
        type: "TimeOut",
        date: timeInfo.split(" ")[0],
        hour: parseInt(timeInfo.split(" ")[1])
    }
    
    this.timeOutEvents.push(timeOutEvent)

    return this
}

let hoursWorkedOnDate = function(date){
    let startObj = this.timeInEvents.filter(obj => obj.date == date)[0]
    let endObj = this.timeOutEvents.filter(obj => obj.date == date)[0]

    return endObj.hour/100 - startObj.hour/100
}

let wagesEarnedOnDate = function(date){
    let hoursWorked = hoursWorkedOnDate.call(this,date)
    return hoursWorked * this.payPerHour
}

let calculatePayroll = function(payrollEspenseArray) {
    return payrollEspenseArray.reduce(function(a,b){
        return a + allWagesFor.call(b)
    },0)
}

let findEmployeeByFirstName = function(collection, firstNameString) {
    return collection.find(employeeRecord => employeeRecord.firstName == firstNameString)
}
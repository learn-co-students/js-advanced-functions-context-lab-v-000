/* Your Code Here */

let createEmployeeRecord = function(row){
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(rows){
    return rows.map(r => createEmployeeRecord(r))
}

let createTimeInEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(" ")

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    })

    return this
}

let createTimeOutEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(" ")

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
    })

    return this
}

let hoursWorkedOnDate = function(targetDate){
    let inEvent = this.timeInEvents.find(e =>{
        return e.date === targetDate;
    })

    let outEvent = this.timeOutEvents.find(e =>{
        return e.date === targetDate;
    })

    return (outEvent.hour - inEvent.hour)/100
}

let wagesEarnedOnDate = function(targetDate){
    return parseInt(this.payPerHour) * hoursWorkedOnDate.call(this, targetDate) 
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

let findEmployeeByFirstName = function(emoloyees, first){
    return emoloyees.find(e => {
        return e.firstName === first
    })
}

let calculatePayroll = function(employees){
    return employees.reduce((total, emoloyee) => {
        return allWagesFor.call(emoloyee) + total
    }, 0)
}
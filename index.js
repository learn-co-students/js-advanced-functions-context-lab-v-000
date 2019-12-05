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

let createEmployeeRecord = function(row){
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
};

let createEmployeeRecords = function(employeeRecords){
    return employeeRecords.map(function(row){
    return createEmployeeRecord(row)
    })
};

let createTimeInEvent = function(eventRecord){
    let [date, hour] = eventRecord.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return this
};

let createTimeOutEvent = function(eventRecord){
    let [date, hour] = eventRecord.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
};

let hoursWorkedOnDate = function(hourWorked){  //hours worked in a day
    //   return parseInt(createTimeOutEvent - createTimeInEvent),2};
    let timeIn = this.timeInEvents.find(function(event){
        return event.date === hourWorked
    })

    let timeOut = this.timeOutEvents.find(function(event){
        return event.date === hourWorked
    })
    return (timeOut.hour - timeIn.hour)/100
};

let wagesEarnedOnDate = function(dateWorked){
    let hourWorked = hoursWorkedOnDate.call(this, dateWorked)
    * this.payPerHour
    return parseFloat(hourWorked)
};

let findEmployeeByFirstName = function(collection, firstName) {
    return collection.find(function(findFirstName){
        return findFirstName.firstName === firstName
    })
};

let payrollExpense = function(allExpenses){
    return allExpenses.reduce(function(expense){
    })
};

let calculatePayroll = function(employeeData){
    return employeeData.reduce(function(record, data){
        return record + allWagesFor.call(data)
    },0)
};
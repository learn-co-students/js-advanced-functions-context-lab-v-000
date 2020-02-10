function createEmployeeRecord([firstName, familyName, title, payPerHour]){
    let employee = {};
    employee.firstName = firstName
    employee.familyName = familyName
    employee.title = title
    employee.payPerHour = payPerHour
    employee.timeInEvents = []
    employee.timeOutEvents = []
    return employee
}

function createEmployeeRecords(arr){
    return arr.map(f => createEmployeeRecord(f))
}
 
function createTimeInEvent(time){
    this.timeInEvents.push(Object.assign({}, time, {
        type: "TimeIn",
        hour: parseInt(time.split(" ")[1]),
        date: time.split(" ")[0],
    }));
    return this
}
 
function createTimeOutEvent(time){
   this.timeOutEvents.push(Object.assign({}, time, {
        type: "TimeOut",
        hour: parseInt(time.split(" ")[1]),
        date: time.split(" ")[0],
    }));
    return this
}
 
function hoursWorkedOnDate(date){
    let dateWorkedOut = this.timeOutEvents.filter(n => {
        return n.date === date;
    });
    let dateWorkedIn = this.timeInEvents.filter(n => {
        return n.date === date;
    });
 
    let hoursWorked = (dateWorkedOut[0].hour - dateWorkedIn[0].hour) / 100;
    return parseInt(hoursWorked)
}
 
function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
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

function calculatePayroll(employees){
    return employees.reduce(function(total, element){
        return total + allWagesFor.call(element)
    }, 0)
}
 
function findEmployeeByFirstName(arr, str){
    if (arr.find(e => e.firstName === str)){
        return arr.find(e => e.firstName === str)
    }
    return undefined
}

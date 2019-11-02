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

function createEmployeeRecord(employee) {
    let emp = {
        firstName: employee[0], 
        familyName: employee[1], 
        title: employee[2], 
        payPerHour: employee[3], 
        timeInEvents: [], 
        timeOutEvents: []
    }
    return emp
}


function createEmployeeRecords(array) {
   return array.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(date) {
   let event = {
       type: "TimeIn", 
       hour: parseInt(date.split(" ")[1], 10), 
       date: date.split(" ")[0]
   }
    this.timeInEvents.push(event)
    return this
}

function hoursWorkedOnDate(date) {
    
    let timeIn = this.timeInEvents.filter(d => d.date === date)[0]
    let timeOut = this.timeOutEvents.filter(d => d.date===date)[0]
    

    return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(date) {
    // let pay =  this.hoursWorkedOnDate(date).reduce((h, total) => total += h) * this.payPerHour
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
    
}

function createTimeOutEvent(date) {

    let event = {
        type: "TimeOut", 
        hour: parseInt(date.split(" ")[1], 10), 
        date: date.split(" ")[0]
    }
     this.timeOutEvents.push(event)
     return this
}
function findEmployeeByFirstName(collection, firstNameString) {
    
    
    let employee = collection.filter(d => d.firstName === firstNameString)[0]
    
    return employee

}
function calculatePayroll(employees) {
   return employees.reduce((total, e) => allWagesFor.call(e) + total, 0)
}
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

const createEmployeeRecord = data => {
    return {
        firstName: data[0],
        familyName: data[1],
        title: data[2],
        payPerHour: data[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = rows => {
    return rows.map(createEmployeeRecord)
}

const createTimeInEvent = function(datetime){
    this.timeInEvents.push({
        type: "TimeIn",
        date: datetime.split(" ")[0],
        hour: parseInt(datetime.split(" ")[1])
    })
    return this
}

const createTimeOutEvent = function(datetime){
    this.timeOutEvents.push({
        type: "TimeOut",
        date: datetime.split(" ")[0],
        hour: parseInt(datetime.split(" ")[1])
    })
    return this
}


const hoursWorkedOnDate = function(date){
    const start = this.timeInEvents.find(d => d.date === date)
    const end = this.timeOutEvents.find(d => d.date === date)
    return (end.hour - start.hour) / 100
}


const wagesEarnedOnDate = function(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

// const allWagesFor = function(){
//     const dates = this.timeInEvents.map(e => e.date)
//     return dates.reduce((memo, date) => memo + wagesEarnedOnDate.call(this, date), 0)
// }

// const calculatePayroll = employees => {
//     return employees.reduce((memo, emp) => memo + allWagesFor(emp), 0)
// }

const findEmployeeByFirstName = (force, name) => {
    return force.find(emp => emp.firstName === name)
}


let calculatePayroll = function(employees){
    return employees.reduce((memo, rec) => memo + allWagesFor.call(rec), 0)
}
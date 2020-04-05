/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


const createEmployeeRecord = function(){
 return {
    firstName:arguments[0][0],
    familyName:arguments[0][1],
    title:arguments[0][2],
    payPerHour:arguments[0][3],
    timeInEvents:[],
    timeOutEvents:[]
    }   
}

const createEmployeeRecords = function (arrayofObjs){
    return arrayofObjs.map((arrayOfObj) => createEmployeeRecord(arrayOfObj))
}

const createTimeInEvent = function (dateStamp) {
    let [date, hour] = dateStamp.split(" ")
    this.timeInEvents.push({ type: "TimeIn", date: date, hour: Number.parseInt(hour,10) })
    return this
}

const createTimeOutEvent = function (dateStamp){
    let [date, hour] = dateStamp.split(" ")
    this.timeOutEvents.push({ type: "TimeOut", date: date, hour: Number.parseInt(hour, 10) })
    return this
}

const hoursWorkedOnDate = function(date){
    let timeIn = this.timeInEvents.find((e) => e.date === date);
    let timeOut = this.timeOutEvents.find((e) => e.date === date);
    return (timeOut.hour - timeIn.hour) / 100
}

const wagesEarnedOnDate = function(date){
    let hoursWorked  = hoursWorkedOnDate.call(this,date)
    // multiply the amount of hours worked by the payPerHour rate 
    return (hoursWorked * this.payPerHour)
}

const calculatePayroll = function (employees){
    return employees.reduce(function (memo, rec) {
        return memo + allWagesFor.call(rec)
    }, 0)
}

const findEmployeeByFirstName = function (collection, firstNameString){
    return collection.find((e)=> e.firstName === firstNameString)
}





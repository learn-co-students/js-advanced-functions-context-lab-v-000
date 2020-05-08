/* Your Code Here */
function createEmployeeRecord(row) {
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employeeRowData) {
    return employeeRowData.map(createEmployeeRecord)
}

function createTimeInEvent(dateStamp) {
   let [date, hour] = dateStamp.split(" ");
   
   this.timeInEvents.push({
       type:"TimeIn",
       hour: parseInt(hour, 10),
       date: date
   })

   return this;
}

function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(" ");
   
   this.timeOutEvents.push({
       type:"TimeOut",
       hour: parseInt(hour, 10),
       date:date
   })

   return this;
}

function hoursWorkedOnDate(soughtDate) {
    // find employee, find timeIn data on the day, find time out data on the day, and find the difference between them.
    let startTime = this.timeInEvents.find(event => event.date === soughtDate);
    let endTime = this.timeOutEvents.find(event => event.date === soughtDate);

    return (endTime.hour - startTime.hour)/100;
}

function wagesEarnedOnDate(soughtDate) {
    let rawWage = hoursWorkedOnDate.call(this, soughtDate) * this.payPerHour;

    return parseFloat(rawWage.toString());
}

function findEmployeeByFirstName(sourceArray, firstName) {
    return sourceArray.find(employee => employee.firstName === firstName);
}

//"YYYY-MM-DD HHMM"
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

function calculatePayroll(sourceArray) {
    return sourceArray.reduce(function(acc, cv){
        return acc + allWagesFor.call(cv)
    },0)
}
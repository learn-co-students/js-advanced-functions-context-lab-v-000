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

function createEmployeeRecord(employees){
  return {
    firstName: employees[0],
    familyName: employees[1],
    title: employees[2],
    payPerHour: employees[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}

function createEmployeeRecords(arrayOfEmployees){
  return arrayOfEmployees.map(createEmployeeRecord);
}

function createTimeInEvent(dateStamp){
  let [date, hour] = dateStamp.split(' ');
  
  this.timeInEvents.push({
    type: "TimeIn", 
    hour: parseInt(hour, 10),
    date: date
  });
    return this;
}

function createTimeOutEvent(dateStamp){
  let [date, hour] = dateStamp.split(' ');
  
  this.timeOutEvents.push({
    type: "TimeOut", 
    hour: parseInt(hour, 10),
    date: date 
  });
    return this;
}

function hoursWorkedOnDate(dateWorked){
  let clockIn = this.timeInEvents.find(event => event.date === dateWorked);
  let clockOut = this.timeOutEvents.find(event => event.date === dateWorked);
  
  return (clockOut.hour - clockIn.hour) / 100;
}

function wagesEarnedOnDate(dateWorked){
  return this.payPerHour * hoursWorkedOnDate.call(this, dateWorked);
}

function findEmployeeByFirstName(records, firstName){
  return records.find(record => {
    return record.firstName === firstName;
  });
}

function calculatePayroll(arrayOfEmployees){
  return arrayOfEmployees.reduce((total, hours) => total + allWagesFor.call(hours), 0);
}
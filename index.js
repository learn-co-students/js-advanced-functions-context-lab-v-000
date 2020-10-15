/* Your Code Here */
const createEmployeeRecord = employeeData => {
  const [
  firstName,
  familyName,
  title,
  payPerHour,
  timeInEvents = [],
  timeOutEvents = [],
] = employeeData;

  return {
    firstName,
    familyName,
    title,
    payPerHour,
    timeInEvents,
    timeOutEvents
  };
}

const createEmployeeRecords = records => {
  return records.map(record => {
    return createEmployeeRecord(record);
  });
}

const createTimeEventObject = (setType, time) => {
  const dateTime = time.split(" ");

  const obj = {
    type: setType,
    hour: parseInt(dateTime[1]),
    date: dateTime[0]
  }
  return obj;
}

function createTimeInEvent(date){
  this.timeInEvents.push(createTimeEventObject("TimeIn", date));
  return this;
}

function createTimeOutEvent(date){
  this.timeOutEvents.push(createTimeEventObject("TimeOut", date));
  return this;
}

function hoursWorkedOnDate(date){
  const timeIn = this.timeInEvents.find(timeInEvent => timeInEvent.date === date);
  const timeOut = this.timeOutEvents.find(timeOutEvent => timeOutEvent.date === date);
  return (timeOut.hour - timeIn.hour)/100;
}

function wagesEarnedOnDate(date){
  const hours = hoursWorkedOnDate.call(this, date);
  return this.payPerHour * hours;
}

function calculatePayroll(records){
  return records.reduce((total, record) => {
    return allWagesFor.call(record) + total;
  }, 0);
}

function findEmployeeByFirstName(records, name) {
  return records.find(record => record.firstName === name);
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

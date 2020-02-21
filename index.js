/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 
 // Your code here
const arrayToObject = (valArray, keys, object = {}) => {
  valArray.map( (value, i) => {
    object[keys[i]] = value;
  });
  return object;
};

const createEmployeeRecord = (employee) => {
  const employeeObject = {"timeInEvents": [], "timeOutEvents":[]};
  const keys = ["firstName", "familyName", "title", "payPerHour"];

  return arrayToObject(employee, keys, employeeObject);
};

const createEmployeeRecords = (employees) => {
  const employeeObjects = [];
  
  employees.map(employee => {
    employeeObjects.push( createEmployeeRecord(employee) );
  });
  return employeeObjects;
};


const createTimeInEvent = function(dateStamp){
    const [date, hour] = dateStamp.split(' ');

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    });

    return this;
};

const createTimeOutEvent = function(dateStamp){
    const [date, hour] = dateStamp.split(' ');

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    });

    return this;
};

const hoursWorkedOnDate = function(soughtDate){
    const inEvent = this.timeInEvents.find(function(e){
        return e.date === soughtDate;
    });

    const outEvent = this.timeOutEvents.find(function(e){
        return e.date === soughtDate;
    });

    return (outEvent.hour - inEvent.hour) / 100;
};

const wagesEarnedOnDate = function(dateSought){
    const rawWage = hoursWorkedOnDate.call(this, dateSought)
        * this.payPerHour;
    return parseFloat(rawWage.toString());
};

const allWagesFor = function(){
    const eligibleDates = this.timeInEvents.map(function(e){
        return e.date;
    });

    const payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this), 0);

    return payable;
};

const findEmployeeByFirstName = (srcArray, firstName) => {
  return srcArray.find(employeeObject => employeeObject.firstName === firstName);
};

const calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec);
    }, 0);
};
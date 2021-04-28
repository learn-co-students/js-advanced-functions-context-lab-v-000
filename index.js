/* Your Code Here */

function createEmployeeRecord(array) {
    return {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: []
    }
  };

function createEmployeeRecords(arrays) {
    return arrays.map(array => createEmployeeRecord(array))
  };

function createTimeInEvent(dateHoursStr) {
    const timeIn = {
        type: "TimeIn",
        hour: parseInt(dateHoursStr.slice(-4)),
        date: dateHoursStr.slice(0,-5)
    };
    this['timeInEvents'].push(timeIn);
    return this
    };
    
function createTimeOutEvent(dateHoursStr) {
    const timeOut = {
        type: "TimeOut",
        hour: parseInt(dateHoursStr.slice(-4)),
        date: dateHoursStr.slice(0,-5)
    };
    this['timeOutEvents'].push(timeOut);
    return this
    };

function hoursWorkedOnDate(date) {
    const timeInObj = this['timeInEvents'].find(element => element.date === date);
    const timeOutObj = this['timeOutEvents'].find(element => element.date === date);
    const hours = (timeOutObj.hour - timeInObj.hour)/100;
    return hours
    }

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
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

function findEmployeeByFirstName(srcArray, firstNameString) {
    return srcArray.find(employee => employee.firstName === firstNameString)
  }

function calculatePayroll(employees) {
    return employees.reduce( (total, employee) => total + allWagesFor.call(employee), 0)
  }
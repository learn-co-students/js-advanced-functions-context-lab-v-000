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

const createEmployeeRecord = function(array){
  return {
    firstName : array[0],
    familyName : array[1],
    title : array[2],
    payPerHour : array[3],
    timeInEvents : [],
    timeOutEvents : []
  }
}

const createEmployeeRecords = function(array){
  return array.map(e => createEmployeeRecord(e));
}

const createTimeInEvent = function(datestamp){
  this.timeInEvents.push ({
    type: "TimeIn",
    hour: parseInt(datestamp.split(' ')[1], 10),
    date: datestamp.split(' ')[0]
  })
  return this
}

const createTimeOutEvent = function(datestamp){
  this.timeOutEvents.push ({
    type: "TimeOut",
    hour: parseInt(datestamp.split(' ')[1], 10),
    date: datestamp.split(' ')[0]
  })
  return this
}

const hoursWorkedOnDate = function(date){
  let timeIn = this.timeInEvents.find(function(e){
    return e.date === date;
  })

  let timeOut = this.timeOutEvents.find(function(e){
    return e.date === date;
  })
  return (timeOut.hour - timeIn.hour) / 100
}

const wagesEarnedOnDate = function(date){
  let wages = (hoursWorkedOnDate.call(this, date) * this.payPerHour);
  return wages;
}

const findEmployeeByFirstName = function(srcArray, firstName){
  return srcArray.find(el => el.firstName === firstName);
}



const calculatePayroll = function(array){
  let total;
  return array.reduce(function(total, emp){
    return total += allWagesFor.call(emp)
  }, 0)
}

let allWagesFor = function () {
  let eligibleDates = this.timeInEvents.map(function (e) {
    return e.date
  })

  let payable = eligibleDates.reduce(function (memo, d) {
    return memo + wagesEarnedOnDate.call(this, d)
  }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable
}

function createEmployeeRecord(arr){
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(rows){
  return row.map(row => createEmployeeRecord(row))
}

function createEmployeeRecords(rows){
  return rows.map(row => createEmployeeRecord(row))
}

function timeStamp(eventType, dateTime){
  const event = eventType.indexOf("I") == 4 ? "TimeIn" : "TimeOut"
  let [date, hour] = dateTime.split(' ')
  this[eventType].push({
    type: event,
    date: date,
    hour: parseInt(hour)
  })
  return this
}

function createTimeInEvent(timeIn){
  timeStamp.call(this, "timeInEvents", timeIn)
  return this
}

function createTimeOutEvent(timeOut){
  timeStamp.call(this, "timeOutEvents", timeOut)
  return this
}

function lookUpTime(eventType, date){
    return this[eventType].find( event => event.date == date).hour
  }

function hoursWorkedOnDate(date){
  let timeIn = lookUpTime.call(this, "timeInEvents", date)
  let timeOut = lookUpTime.call(this, "timeOutEvents", date)
  return (timeOut - timeIn)/100
}

function wagesEarnedOnDate(date){
  return this.payPerHour * hoursWorkedOnDate.call(this, date)
}

function calculatePayroll(employees){
  return employees.reduce((total, employee) => total + allWagesFor.call(employee), 0)
}

function findEmployeeByFirstName(employees, name){
  return employees.find(employee => employee.firstName === name)
}
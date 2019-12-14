function createEmployeeRecord(employeeArr) {
  return {
    firstName: employeeArr[0],
    familyName: employeeArr[1],
    title: employeeArr[2],
    payPerHour: employeeArr[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(employeesArr) {
  return employeesArr.map(employeeArr => createEmployeeRecord(employeeArr))
}

function createTimeInEvent(date) {
  let e = {
    type: "TimeIn",
    hour: parseInt(date.split(' ')[1], 10),
    date: date.split(' ')[0]
  }
  this.timeInEvents.push(e)
  return this
}

function createTimeOutEvent(date) {
  let e = {
    type: "TimeOut",
    hour: parseInt(date.split(' ')[1], 10),
    date: date.split(' ')[0]
  }
  this.timeOutEvents.push(e)
  return this
}

function hoursWorkedOnDate(date) {
  let clockIn = this.timeInEvents.find(e => e.date === date)
  let clockOut = this.timeOutEvents.find(e => e.date === date)
  return (clockOut.hour - clockIn.hour)/100
}

function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour
}


let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(employees, firstName) {
  return employees.find(employee => employee.firstName === firstName)
}

function calculatePayroll(employees) {
  let totalWages = []
  employees.forEach(employee => {
    let daysWorked = employee.timeInEvents.map(e => e.date)
    daysWorked.forEach(day => totalWages.push(wagesEarnedOnDate.call(employee, day)))
  })
  return totalWages.reduce((acc, c) => acc + c)
}

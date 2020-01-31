/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 function createEmployeeRecord(array){
   const employee = {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: []
   }
   return employee
 }

 //createEmployeeRecords
 function createEmployeeRecords(arrays){
   return arrays.map(createEmployeeRecord)
   }

   //createTimeInEvent
   function createTimeInEvent(timeDateStamp){
     let timeInArr = timeDateStamp.split(' ')
     this.timeInEvents.push(
       {type: "TimeIn",
       date: timeInArr[0],
       hour: parseInt(timeInArr[1])}
     )
     return this
   }

   //createTimeOutEvent
   function createTimeOutEvent(timeDateStamp){
     let timeOutArr = timeDateStamp.split(' ')
     this.timeOutEvents.push(
       {type: "TimeOut",
       date: timeOutArr[0],
       hour: parseInt(timeOutArr[1])}
     )
     return this
   }

   //hoursWorkedOnDate
   function hoursWorkedOnDate(date){
     const timeInHour = this.timeInEvents.find(x =>
       {return x.date === date})
     const timeOutHour = this.timeOutEvents.find(x =>
       {return x.date === date})
      return (timeOutHour.hour - timeInHour.hour)/100
   }

   //wagesEarnedOnDate
   function wagesEarnedOnDate(date){
     let hoursWorked = hoursWorkedOnDate.call(this, date)
     return (this.payPerHour * hoursWorked)
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

//get help to refactor your solution
// function allWagesFor(employeeObj){
//   let wagesArray = []
//   employeeObj.timeInEvents.forEach(e => {
//   wagesArray.push(wagesEarnedOnDate(employeeObj, e.date))
//   })
//   return wagesArray.reduce((memo, element) => memo + element, 0)
// }


function findEmployeeByFirstName(emps, firstName){
  return emps.find(x =>{
   return x.firstName === firstName ? x : undefined
  })
}


function calculatePayroll(employeeObjs){
  return employeeObjs.reduce((memo, r) => memo + allWagesFor.call(r), 0)
  //do you need call becauase bind has been used above and it is locked to the previous record object?
  //why then is the error "TypeError: Cannot read property 'timeInEvents' of undefined: ?
}

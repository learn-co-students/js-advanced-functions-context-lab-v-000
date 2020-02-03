/* Your Code Here */


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
  //createTimeInEvent.call(empRecord, "2014-02-28 1400") - call and apply take the context of the FIRST argument they are invoked with
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
//createTimeOutEvent.call(empRecord, "2015-02-28 1700")
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
   //hoursWorkedOnDate.call(cRecord, "44-03-15")
   function hoursWorkedOnDate(date){
     const timeInHour = this.timeInEvents.find(x =>
       {return x.date === date})
     const timeOutHour = this.timeOutEvents.find(x =>
       {return x.date === date})
      return (timeOutHour.hour - timeInHour.hour)/100
   }

   //wagesEarnedOnDate
   //wagesEarnedOnDate.call(cRecord, "44-03-15")
   function wagesEarnedOnDate(date){
     let hoursWorked = hoursWorkedOnDate.call(this, date)
     return (this.payPerHour * hoursWorked)
   }

//allWagesFor
//allWagesFor.call(cRecord)
let allWagesFor = function () {
      //iterates through timeInEvents property in the cRecord object
    let eligibleDates = this.timeInEvents.map(function (e) {
      //returns the date property of each timeInEvent []
        return e.date
    })
      //takes the dates returned and computes the wages earned on each date utilizing the wagesEarnedOnDate.
    let payable = eligibleDates.reduce(function (memo, d) {
      // because this = cRecord, you have to set
        return memo + wagesEarnedOnDate.call(this, d)
     }.bind(this), 0) // <== we need bind here because when you     call the wagesEarnedOnDate function from within this function it has no idea of the context of this - you get the error   "TypeError: Cannot read property 'find' of undefined". SO you can pass a thisArg argument to Reduce as its second argument or a bind.which would hard set it, but for how long does it remain? If you try and invoke wagesEarnedOnDate with a .call and another record will it use that one or remain linked to this one?
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

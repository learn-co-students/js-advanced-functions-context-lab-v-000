// /* Your Code Here */
//
// /*
//  We're giving you this function. Take a look at it, you might see some usage
//  that's new and different. That's because we're avoiding a well-known, but
//  sneaky bug that we'll cover in the next few lessons!
//
//  As a result, the lessons for this function will pass *and* it will be available
//  for you to use if you need it!
//  */




let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
    // console.log("eligibleDates", eligibleDates)
    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
    // console.log("payable", payable)

    return payable
}







// Your code here

//  could also have opened the brackets and did like. firstName: array[0]
function createEmployeeRecord(array){
  let obj1 = {}
  obj1.firstName = array[0]
  obj1.familyName = array[1]
  obj1.title = array[2]
  obj1.payPerHour = array[3]
  obj1.timeInEvents = []
  obj1.timeOutEvents = []
  return obj1
}




function createEmployeeRecords(arrayOfArrays){
  return arrayOfArrays.map( arr => createEmployeeRecord(arr) )
}



function createTimeInEvent(dateStampString){
  // console.log("dateStampString:", dateStampString)
  // console.log("this", this)
  // debugger
  let newObj = {
    type: "TimeIn",
    hour: parseInt(dateStampString.slice(dateStampString.length - 4)),
    // hour: parseInt(dateStampString.slice(0, -5)),
    // date: dateStampString.slice(0, 10)
    date: dateStampString.split(" ")[0]



}
// console.log("date stamp", dateStampString.slice(0, 10))

   this.timeInEvents.push(newObj)
   return this
}




function createTimeOutEvent(dateStampString){
  let newObject = {
    type: "TimeOut",
    hour: parseInt(dateStampString.slice(dateStampString.length - 4)),
    // hour: parseInt(dateStampString.slice(0, -5)),
    // date: dateStampString.slice(0, 10) }
    date: dateStampString.split(" ")[0]
    // date: dateStampString.slice(0, 8) }
  }

  this.timeOutEvents.push(newObject)
  return this
}






  function hoursWorkedOnDate(formDate){
    // debugger
    let rightTimeIn = this.timeInEvents.find( record => {
        return record.date === formDate

    } )
    let rightTimeOut = this.timeOutEvents.find( record => {
    return record.date === formDate
  } )
  return ((rightTimeOut.hour - rightTimeIn.hour)/100)
}




// dateOfForm: 44-03-15
// describe("wagesEarnedOnDate", function () {
//   it("calculates that the employee earned 54 dollars", function () {
//     cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
//     createTimeInEvent.call(cRecord, "44-03-15 0900")
//     createTimeOutEvent.call(cRecord, "44-03-15 1100")
//     expect(wagesEarnedOnDate.call(cRecord, "44-03-15")).to.equal(54)
//   })

function wagesEarnedOnDate(dateOfForm){
  // console.log("dateOfForm", dateOfForm)
  // console.log("this pay hour", this.payPerHour)
  // console.log("hoursWorkedOnDate(dateOfForm)", hoursWorkedOnDate(dateOfForm))
  // debugger
    return (this.payPerHour * hoursWorkedOnDate.call(this, dateOfForm))
}


function findEmployeeByFirstName(srcArray, firstNameString) {
  return srcArray.find( employeeObject => {
    return employeeObject.firstName === firstNameString
  })
}


function calculatePayroll(employeesArray) {
  // console.log("employeesArray", employeesArray)
  // console.log("employeesArray2", employeesArray.map( employee => allWagesFor(employee)))


  let wagesForEmployees = employeesArray.map( employee => allWagesFor.call(employee))
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let totalWagesDueForAll = wagesForEmployees.reduce(reducer)
  return totalWagesDueForAll
}

//
//
// cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
// createTimeInEvent.call(cRecord, "44-03-15 0900")
// createTimeOutEvent.call(cRecord, "44-03-15 1100")
// wagesEarnedOnDate.call(cRecord, "44-03-15")

//
// cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 1000])
// createTimeInEvent.call(cRecord, "44-03-15 0900")
// createTimeOutEvent.call(cRecord, "44-03-15 1100")
// hoursWorkedOnDate.call(cRecord, "44-03-15")

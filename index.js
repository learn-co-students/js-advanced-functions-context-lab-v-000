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

function createEmployeeRecord(record){
  let newObject = {}
  newObject.firstName = record[0]
  newObject.familyName = record[1]
  newObject.title = record[2]
  newObject.payPerHour = record[3]
  newObject.timeInEvents = []
  newObject.timeOutEvents = []
  return newObject
}

function createEmployeeRecords(array){
  return array.map(function(e){
    return createEmployeeRecord(e)
  })
}


let createTimeInEvent = function(d){
  let date = d.slice(0, 10)
  let hour = parseInt(d.slice(11, 15), 10)
  this.timeInEvents.push({
    type: "TimeIn",
    hour: hour,
    date: date
  })
  return this
}

let createTimeOutEvent = function(d){
  let date = d.slice(0, 10)
  let hour = parseInt(d.slice(11, 15), 10)
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: hour,
    date: date
  })
  return this
}

let hoursWorkedOnDate = function(d){
  let inEvents = this.timeInEvents.find(function(e){
     return d === e.date
  })
  let outEvents = this.timeOutEvents.find(function(e){
    // console.log(e)
    return d === e.date
  })
  // return inEvents
  // console.log(inEvents)
  return (outEvents.hour - inEvents.hour) / 100

}

let findEmployeeByFirstName = function(srcArray, firstName){
  return srcArray.find(function(record){
    return record.firstName === firstName
  })
}

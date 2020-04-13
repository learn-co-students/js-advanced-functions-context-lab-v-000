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


let createTimeInEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

let createTimeOutEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

let hoursWorkedOnDate = function(d){
  let inEvents = this.timeInEvents.find(function(e){
     return d === e.date
  })
  let outEvents = this.timeOutEvents.find(function(e){
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

let wagesEarnedOnDate = function(d){
  let brutto = hoursWorkedOnDate.call(this, d) * this.payPerHour
  return parseFloat(brutto.toString())
}

let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}

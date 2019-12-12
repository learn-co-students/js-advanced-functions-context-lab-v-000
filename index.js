/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 let createEmployeeRecord = function (array){
 let card = {
  firstName: array[0],
  familyName: array[1],
  title: array[2],
  payPerHour: array[3],
  timeInEvents: [],
  timeOutEvents: []
}
return card
}

let createEmployeeRecords = function (array){
  return array.map(function (e){
   return createEmployeeRecord(e)
  })
}

let createTimeInEvent = function(date){

let splitDate = date.split(' ')
let day = splitDate[0]
let hour = Number(splitDate[1])

// in array - timeEvents. add type, hour, date
let checkIn = {
  type: 'TimeIn',
  hour: hour,
  date: day
}
 this.timeInEvents.push(checkIn)
 return this

}

let createTimeOutEvent = function(date){

  let splitDate = date.split(' ')
  let day = splitDate[0]
  let hour = Number(splitDate[1])

  // in array - timeEvents. add type, hour, date
  let checkOut = {
    type: 'TimeOut',
    hour: hour,
    date: day
  }
   this.timeOutEvents.push(checkOut)
   return this
}

let hoursWorkedOnDate = function(date){
  let inEvent = this.timeInEvents.find(function(e){
          return e.date === date
      })

      let outEvent = this.timeOutEvents.find(function(e){
          return e.date === date
      })

      return (outEvent.hour - inEvent.hour) / 100
}

let wagesEarnedOnDate = function(date){
  let rawWage = hoursWorkedOnDate.call(this,date) * this.payPerHour
      return parseFloat(rawWage.toString())
}




let findEmployeeByFirstName = function(srcArray,firstName){
  return srcArray.find(element => element.firstName === firstName)
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


let calculatePayroll = function(array){
  return array.reduce(function(index,record){
  return index + allWagesFor.call(record)
  //dont have to write a new method for this object
},0)

}

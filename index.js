/* Your Code Here */
let createEmployeeRecord = function(fourElementArray){
    return {
        firstName: fourElementArray[0],
        familyName: fourElementArray[1],
        title: fourElementArray[2],
        payPerHour: fourElementArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(employeeDataArray) {
    return employeeDataArray.map(data => {
        return createEmployeeRecord(data)
    }) 
}



// let createTimeInEvent = function(employeeObject, dateStamp) {
//     console.log(dateStamp)
//     let [date, hour] = dateStamp.split(' ')
//     console.log(date)
//     console.log(hour)
//     employeeObject.timeInEvents.push({
//         type: "TimeIn",
//         hour: parseInt(hour, 10),
//         date,
//     })
//     return employeeObject
// }

// let createTimeOutEvent = function(employeeObject, dateStamp) {
//     let [date, hour] = dateStamp.split(' ')

//     employeeObject.timeOutEvents.push({
//         type: "TimeOut",
//         hour: parseInt(hour, 10),
//         date,
//     })
//     return employeeObject
// }
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
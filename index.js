import { timingSafeEqual } from "crypto"

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

let createEmployeeRecord = function(row){
    return {
        firstName:row[0],
        familyName:row[1],
        title:row[2],
        payPerHour:row[3],
        timeInEvents:[ ],  //  empty array
        timeOutEvents:[ ]  //  empty array
    }
}

let createEmployeeRecords = function(arrayEmployeeRecord){  //  has a function called createEmployeeRecords
    return arrayEmployeeRecord.map(function(row){
        return createEmployeeRecord(row)  //  create 2 rows
    })
};

let createTimeInEvent = function(timeInEvents){  // create a createTimeInEvent function passing argument timeInEvents
    let [date, hour] = timeInEvents.split(' ')
    this.timeInEvents.push({
       type:"TimeIn",
        date,
        hour:parseInt(hour, 10),
     })
     return this
}

/* Your Code Here */
let calculatePayroll = function(employees){
   return employees.reduce(function(memo, e){
        return memo + allWagesFor.call(e)
    }, 0);
};

let findEmployeeByFirstName = function(src, name){
    return src.find(e => e.firstName === name)
};

let wagesEarnedOnDate = function(dStamp){
    return hoursWorkedOnDate.call(this, dStamp) * this.payPerHour
};

let hoursWorkedOnDate = function(dStamp){
     let hours = this.timeOutEvents.find(({date}) => date === dStamp).hour - this.timeInEvents.find(({date}) => date === dStamp).hour
     console.log(hours)
     return hours / 100;
};

let createTimeOutEvent = function(dStamp){
    let [date, hour] = dStamp.split(' ');

    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date: date
    });
    return this
};

let createTimeInEvent = function(dStamp){
    let [date, hour] = dStamp.split(' ');

    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date: date
    });
    return this
};

let createEmployeeRecord = function(eArray){
    return {
        firstName: eArray[0],
        familyName: eArray[1],
        title: eArray[2],
        payPerHour: eArray[3],
        timeInEvents: [],
        timeOutEvents: []
    };
};

let createEmployeeRecords = function(eArrays){
    return eArrays.map(row => createEmployeeRecord(row))
};       

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
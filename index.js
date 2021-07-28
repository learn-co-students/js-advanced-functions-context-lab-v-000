
/* Your Code Here */
let wagesEarnedOnDate = function(date){
    let hours = hoursWorkedOnDate.call(this, date);
    return hours * this.payPerHour
};

let hoursWorkedOnDate = function(date){
    let i = this.timeInEvents.find(d => d.date === date);
    let o = this.timeOutEvents.find(d => d.date === date);
    return (o.hour - i.hour ) / 100;
};

let createTimeOutEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(" ");

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    })
    return this
};

let createTimeInEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(" ");

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    })
    return this 
};

let createEmployeeRecords = function(employees){
    return employees.map(e => createEmployeeRecord(e));
};

let createEmployeeRecord = function(eRecord){
    return {
        firstName: eRecord[0],
        familyName: eRecord[1],
        title: eRecord[2],
        payPerHour: eRecord[3],
        timeInEvents: [],
        timeOutEvents: []
    };
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

let findEmployeeByFirstName = function(srcArray, firstName){
    return srcArray.find(e => e.firstName === firstName);
};

let calculatePayroll = function(employees){
    return employees.reduce(function(memo, e){
        return memo + allWagesFor.call(e);
    },0)
};
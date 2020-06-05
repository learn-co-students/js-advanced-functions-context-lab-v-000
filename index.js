function createEmployeeRecord(array){
    let employeeRecord = {};
    employeeRecord["firstName"] = array[0];
    employeeRecord["familyName"] = array[1];
    employeeRecord["title"] = array[2];
    employeeRecord["payPerHour"] = array[3];
    employeeRecord["timeInEvents"] = [];
    employeeRecord["timeOutEvents"] = [];
    return employeeRecord;   
}

function createEmployeeRecords(array){
    let employeeRecords = array.map(x => createEmployeeRecord(x))
    return employeeRecords;
}

function createTimeInEvent(dateStamp){
    const timeInObject = {};
    let date = dateStamp.substring(0,10);
    let time = dateStamp.substring(11,15);
    let parsedTime = parseInt(time);

    timeInObject["type"] = "TimeIn";
    timeInObject["hour"] = parsedTime; 
    timeInObject["date"] = date;

    this.timeInEvents.push(timeInObject);
    return this;

}

function createTimeOutEvent(dateStamp){
    const timeOutObject = {};
    let date = dateStamp.substring(0,10);
    let time = dateStamp.substring(11,15);
    let parsedTime = parseInt(time);

    timeOutObject["type"] = "TimeOut";
    timeOutObject["hour"] = parsedTime; 
    timeOutObject["date"] = date;

    this.timeOutEvents.push(timeOutObject);
    return this;
} 

function hoursWorkedOnDate(workDate){
    let inDateObject = this.timeInEvents.find(obj => obj.date == workDate)
    let outDateObject = this.timeOutEvents.find(obj => obj.date == workDate)
    let timeIn = inDateObject.hour;
    let timeOut = outDateObject.hour;
    let hoursWorked = (timeOut - timeIn) / 100;
    return hoursWorked;
}

function wagesEarnedOnDate(workDate){
    console.log(this)
    let payRate = this.payPerHour;
    let hoursWorked = hoursWorkedOnDate.call(this, workDate);
    let wagesEarned = payRate * hoursWorked;
    return wagesEarned;
}


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

function calculatePayroll(array){
    let totalWagesPerEmployee = array.map(element => allWagesFor.apply(element));
    let totalPayroll = totalWagesPerEmployee.reduce((total, element) => element + total, 0)
    return totalPayroll;
}

function findEmployeeByFirstName(array, string){
    let foundFirstName = array.find(obj => obj.firstName == string);
    return foundFirstName;
}
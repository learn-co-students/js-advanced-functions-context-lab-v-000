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

function createEmployeeRecord(employeeArray){
    
    let employee = {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}

function createEmployeeRecords(allEmployees){
    return allEmployees.map( (employee) => { 
        return createEmployeeRecord.call(this, employee); 
    });
}

function createEvent(type, dateStamp){

    const [date, hour] = dateStamp.split(" ");

    return {
        type: type,
        hour: parseInt(hour),
        date: date
    }
}

function createTimeInEvent(dateStamp){
    this.timeInEvents.push(createEvent("TimeIn", dateStamp))
    return this   
}

function createTimeOutEvent(dateStamp){
    this.timeOutEvents.push(createEvent("TimeOut", dateStamp))
    return this
}

function findEmployeeByFirstName(allEmployees, firstName){
    return allEmployees.find((employee) => {
        return employee.firstName === firstName
    })
}



function calculatePayroll(allEmployees){

    // const allWagesFor = function(){
    //     //this = employee record
    //     return this.timeOutEvents.reduce( (allEmployeeWages, event) => {
    //         return allEmployeeWages + wagesEarnedOnDate.call(this, event.date)
    //     }, 0)
    // }    
    
    return allEmployees.reduce( (totalWages, employee) => {
        return totalWages + allWagesFor.call(employee)
    }, 0);
}

function wagesEarnedOnDate(dateStamp){
    return hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour
}

function hoursWorkedOnDate(dateStamp){
    //#this = event object
    
    const findByDate = (event) => { return event.date === dateStamp };
    const getHourFromDate = function() { return this.find(findByDate).hour };
    
    const inTime = getHourFromDate.call(this.timeInEvents);
    const outTime = getHourFromDate.call(this.timeOutEvents);

    return (outTime - inTime) / 100;
}


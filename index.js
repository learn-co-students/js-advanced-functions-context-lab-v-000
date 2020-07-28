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


function createEmployeeRecord(array) {
    let employee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3], 
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}

function createEmployeeRecords(arrayofArrays) { 
    let newArray = arrayofArrays.map(array => createEmployeeRecord(array))
    return newArray
}


function createTimeInEvent(dateStamp) {
    let timeIn = this.timeInEvents 
    timeIn.push({
                type: "TimeIn",
                hour: parseInt(dateStamp.split(" ")[1]),
                date: dateStamp.split(" ")[0]
    });
    return this
}


function createTimeOutEvent(dateStamp) {
    let timeOut = this.timeOutEvents 
    timeOut.push({
                type: "TimeOut",
                hour: parseInt(dateStamp.split(" ")[1]),
                date: dateStamp.split(" ")[0]
    });
    return this
}

//This will be called like Julius.hoursWorkedOnDate(01/01/0000) which means 'this' will equal Julius
function hoursWorkedOnDate(day) {
    let dayIn = this.timeInEvents.find(timeEvent => timeEvent.date === day);
    let dayOut = this.timeOutEvents.find(timeEvent => timeEvent.date === day);
    console.log(dayIn)
   
    let hourIn = dayIn.hour 
    let hourOut = dayOut.hour 

    return (hourOut - hourIn) / 100
}


function wagesEarnedOnDate(date) {

    // console.log(date)
    // console.log(this)

    let hours = hoursWorkedOnDate.call(this, date);
    let rate = this.payPerHour 
    return hours * rate
}


function findEmployeeByFirstName(srcArray, name) {
    let empArray = srcArray.filter(o => o.firstName === name)
    return empArray[0]

}


function calculatePayroll(empRecordsArray) {
    //console.log(empRecordsArray) - returns 6 employee records

    //for each employee record
    let allWages = empRecordsArray.map(empObj => {
        //console.log(empObj) - returns employee record

        empObj.timeInEvents.map(timeInEvent => {
            //console.log(timeInEvent)  - returns { type: 'TimeIn', hour: 800, date: '2018-01-01' }  
           // console.log(timeInEvent.date) - returns date in format: 0000-00-0000

             //find the wages worked on each date in their time in array
              wagesEarnedOnDate.call(empObj, timeInEvent.date)
        })
    })

    console.log(allWages)
        
    //add them together to find total wages for that employee
    let payroll = allWages.reduce((total, w) => w + total, 0)

    return payroll
}




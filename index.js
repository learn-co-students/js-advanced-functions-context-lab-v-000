/* Your Code Here */
// has a function called createEmployeeRecord
let createEmployeeRecord = function(employeeRecord) {
    // console.log("this", this) // Endless Loop
    return {
        // populates a firstName field from the 0th element
        firstName: employeeRecord[0],
        // populates a familyName field from the 1th element
        familyName: employeeRecord[1],
        // populates a title field from the 2th element
        title: employeeRecord[2],
        // populates a payPerHour field from the 3th element
        payPerHour: employeeRecord[3],
        // initializes a field, timeInEvents, to hold an empty Array
        timeInEvents: [],
        // initializes a field, timeOutEvents, to hold an empty Array
        timeOutEvents: []
    }
}

// has a function called createEmployeeRecords
let createEmployeeRecords = function(employeeRecord) {
    // console.log("this", this)
    // this undefined
    // console.log("employeeRecord", employeeRecord)
    // employeeRecord [ [ 'Mister', 'Matt', 'Chief Awesomeness Offiser', 1000 ] ]
    // iterate over employeeRecord
    return employeeRecord.map((employee) => {
        // its implementation makes use of of the createEmployeeRecord function
        // creates two records
        // correctly assigns the first names
        return createEmployeeRecord(employee)
        // console.log("employee", employee)
        // employee [ 'moe', 'sizlak', 'barkeep', 2 ]
        // employee [ 'bartholomew', 'simpson', 'scamp', 3 ]
    })
}

// has a function called createTimeInEvent
let createTimeInEvent = function(dateStamp) {
//     console.log("this", this)
//     // this {
//   firstName: 'Byron',
//   familyName: 'Poodle',
//   title: 'Mascot',
//   payPerHour: 3,
//   timeInEvents: [],
//   timeOutEvents: []
// }
    // console.log("dateStamp", dateStamp)
    // dateStamp 2014-02-28 1400
    let [date, hour] = dateStamp.split(" ");
        this.timeInEvents.push({ 
            // creates the correct type
            type: "TimeIn",
            // extracts the correct hour
            // console.log("hour", hour)
            // hour 1400
            hour: parseInt(hour, 10),
            // extracts the correct date
            //console.log("date", date)
            // date 2014-02-28
            date
        })
        return this
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
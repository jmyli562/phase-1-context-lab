/* Your Code Here */
function createEmployeeRecord(arr){
    const obj = {}

    obj.firstName = arr[0];
    obj.familyName = arr[1];
    obj.title = arr[2];
    obj.payPerHour = arr[3];
    obj.timeInEvents = [];
    obj.timeOutEvents = [];

    return obj;
}

function createEmployeeRecords(arr){
    let newArr = [];
    
    arr.map((records)=>{
        newArr.push(createEmployeeRecord(records));
    })

    return newArr;
}

function createTimeInEvent(date){
    const newObj = {};
    newObj.type = "TimeIn";
    newObj.hour = parseInt(date.substr(11,4));
    newObj.date = date.substr(0,10); //2014-02-28

    const arr = this.timeInEvents;
    arr.push(newObj);

    return this;
}

function createTimeOutEvent(date){
    const newObj = {};
    newObj.type = "TimeOut";
    newObj.hour = parseInt(date.substr(11,4));
    newObj.date = date.substr(0,10);

    const arr = this.timeOutEvents;
    arr.push(newObj);
    
    return this;
}

function hoursWorkedOnDate(date){
    const timeInArr = this.timeInEvents;
    const timeOutArr = this.timeOutEvents;
    
    let hour1;
    let hour2;

    for(let element of timeInArr){
        if(element.date === date){
            hour1 = element.hour;
        }
    }

    for(let element of timeOutArr){
        if(element.date === date){
            hour2 = element.hour;
        }
    }

    const hoursWorked = hour2 - hour1;

    return hoursWorked/100;
}

function wagesEarnedOnDate(date){
    let wageEarned;
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return wageEarned = hoursWorked * this.payPerHour;
}

function findEmployeeByFirstName(arr, firstName){
    let emp = {};

    arr.forEach((employee)=>{
        if(employee.firstName === firstName){
            emp = employee;
        }else{
            return undefined;
        }
    })

    return emp;
}

function calculatePayroll(arr){
    let payroll = 0;
    
    payroll = arr.reduce((sum, currEmployee)=> sum + allWagesFor.call(currEmployee), 0);

    return payroll;
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


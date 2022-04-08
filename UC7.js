//UC2 - Ability to Calculate Daily Employee Wage based on part time or full time work 
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS= 20;
const MAX_HRS_IN_MONTH=100;
let empHrs = 0;
let totalEmpHrs = 0;
let totalEmpWage = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

//UC1 - Check Employee is present or Absent or part time
function getWorkingHours(empCheck)
{
    switch (empCheck) {
        case IS_ABSENT:
            return 0;
            break;
       case IS_PART_TIME:
           return PART_TIME_HOURS; 
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS; 
            break;
    }
}

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
 {
     totalWorkingDays++;
     let empCheck = Math.floor(Math.random() * 3);
     empHrs = getWorkingHours(empCheck);
     totalEmpHrs += empHrs;
     empDailyWageArr.push(CalculateWage(empHrs));
 }

 function CalculateWage(empHrs)
 {
     return empHrs * WAGE_PER_HOUR;
 }
console.log("Employee Daily Wages are: ");
totalEmpWage = CalculateWage(totalEmpHrs);
console.log(empDailyWageArr);
console.log("UC6: Total days: "+ totalWorkingDays +", Total Emp Hrs: "+ totalEmpHrs +", Total Emp Wage: " + totalEmpWage);

//Array Helper Functions
//UC 7A - Calc total wage using array forEach traversal or reduce method
let totEmpWage = 0;
function Sum(dailyWage){
    totEmpWage += dailyWage;
}
console.log(empDailyWageArr.forEach(Sum));
console.log("UC7A: Total days: "+ totalWorkingDays +", Total Emp Hrs: "+ totalEmpHrs +", Total Emp Wage: " + totEmpWage);

function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log("UC7A: EmpWage with reduce: "+ empDailyWageArr.reduce(totalWages, 0));

//UC 7B - SHow the day along with daily wage using array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr +" = "+ dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B: Daily wage map:");
console.log(mapDayWithWageArr);

//UC 7C - Show days when full time wage of 160 were earned
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC7C: Daily wage filter when fulltime wage earned:");
console.log(fullDayWageArr);

//UC 7D - Find the first occurance when fulltime wage was earned using find function
function FindFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7D: First time fulltime wage was earned on day:" + mapDayWithWageArr.find(FindFullTimeWage));

//UC 7E - Check if every element of fulltime wage is truely holding fulltime wage
function IsAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7E: Check all elements have fulltime wage:" + fullDayWageArr.every(FindFullTimeWage));

//UC 7F - Check if there is any any part time wage
function IsAnyParttimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC 7F: Check if any parttime wage: " + mapDayWithWageArr.some(IsAnyParttimeWage));

//UC 7G - Find the number of days the employee worked
function TotalDaysWorked(numOfDays, dailyWage){
    if(dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("UC 7G: Number of days emp worked: " + empDailyWageArr.reduce(TotalDaysWorked, 0));
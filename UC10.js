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
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
let empDailyHrsAndWageArr = new Array();

//UC1 - Check Employee is present or Absent or part time
function GetWorkingHours(empCheck)
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
     empHrs = GetWorkingHours(empCheck);
     totalEmpHrs += empHrs;
     empDailyWageArr.push(CalculateWage(empHrs));
     empDailyWageMap.set(totalWorkingDays, CalculateWage(empHrs));
     empDailyHrsMap.set(totalWorkingDays, GetWorkingHours(empCheck));
     empDailyHrsAndWageArr.push(
         {
             dayNum: totalWorkingDays,
             dailyHrs: empHrs,
             dailyWage: CalculateWage(empHrs),
             toString() {
                 return '\nday' + this.dayNum + ' => working hours is ' + this.dailyHrs + ' and wage earned = ' + this.dailyWage
             }
         }
     );
 }

 function CalculateWage(empHrs)
 {
     return empHrs * WAGE_PER_HOUR;
 }
console.log("Employee Daily Wages are: ");
totalEmpWage = CalculateWage(totalEmpHrs);
console.log(empDailyWageArr);
console.log("\nUC6: Total days: "+ totalWorkingDays +", Total Emp Hrs: "+ totalEmpHrs +", Total Emp Wage: " + totalEmpWage);

//Array Helper Functions
//UC 7A - Calc total wage using array forEach traversal or reduce method
let totEmpWage = 0;
function Sum(dailyWage){
    totEmpWage += dailyWage;
}
console.log(empDailyWageArr.forEach(Sum));
console.log("\nUC7A: Total days: "+ totalWorkingDays +", Total Emp Hrs: "+ totalEmpHrs +", Total Emp Wage: " + totEmpWage);

function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log("\nUC7A: EmpWage with reduce: "+ empDailyWageArr.reduce(totalWages, 0));

//UC 7B - SHow the day along with daily wage using array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr +" = "+ dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("\nUC7B: Daily wage map:");
console.log(mapDayWithWageArr);

//UC 7C - Show days when full time wage of 160 were earned
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("\nUC7C: Daily wage filter when fulltime wage earned:");
console.log(fullDayWageArr);

//UC 7D - Find the first occurance when fulltime wage was earned using find function
function FindFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("\nUC7D: First time fulltime wage was earned on day:" + mapDayWithWageArr.find(FindFullTimeWage));

//UC 7E - Check if every element of fulltime wage is truely holding fulltime wage
function IsAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("\nUC7E: Check all elements have fulltime wage:" + fullDayWageArr.every(FindFullTimeWage));

//UC 7F - Check if there is any any part time wage
function IsAnyParttimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("\nUC 7F: Check if any parttime wage: " + mapDayWithWageArr.some(IsAnyParttimeWage));

//UC 7G - Find the number of days the employee worked
function TotalDaysWorked(numOfDays, dailyWage){
    if(dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("\nUC 7G: Number of days emp worked: " + empDailyWageArr.reduce(TotalDaysWorked, 0));

//UC 8 - Storing daily wage in map
console.log(empDailyWageMap);
console.log("\nUC8 - Emp Wage map totalHrs: "+ Array.from(empDailyWageMap.values()).reduce(totalWages,0));

//UC 9 - Arrow functions

const findTotal = (totalVal, dailyVal) => {
    return totalVal  + dailyVal;
}
let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("\nUC9 : Emp wage with arrow:- Total Hours: " + totalHours + ", Total wage: " + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach((value, key, map) => {
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key); 
});
console.log("Full working days: " + fullWorkingDays);
console.log("Part working days: " + partWorkingDays);
console.log("Non working days: " + nonWorkingDays);

//UC 10 - Object Creation
console.log("\nUC 10: Showing Daily hours worked and wage earned: "+ empDailyHrsAndWageArr);
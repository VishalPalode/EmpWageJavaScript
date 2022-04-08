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
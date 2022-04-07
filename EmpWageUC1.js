//UC1
const IS_ABSENT=0;
let empCheck = Math.floor(Math.random()*10)%2; // 0.01234-0.93456776543 // 0.52335*10 = 5.2335 = 5%2 =1
if(empCheck==IS_ABSENT)
{
    console.log("Employee is absent");
}
else
{
    console.log("Employee is present");
}

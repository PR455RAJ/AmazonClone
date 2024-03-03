//Q.no-1 Get user to input a number using prompt("enter a number:").check if the number is a 
//multiple of 5 or not
// let n=prompt("enter the number");
// if(n%5===0)
// {
//     console.log("multiple of 5");
// }
// else
// {
//     console.log("not multiple of 5");
// }
//Q.no-2 Write a code which can give grades to students according to their scores
//80-90,A
//70-89,B
//60-69,C
//50-59,D
//0-49,f
let n=prompt("enter the number");
if(n>=80 && n<=100)
{
    console.log("A");
}
else if(n>=70 && n<=79)
{
    console.log("B");
}
else if(n>=60 && n<=69)
{
    console.log("C");
}
else if(n>=50 && n<=59)
{
    console.log("D");
}
else
{
    console.log("F");
}
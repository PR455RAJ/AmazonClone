//demo array
let marks=[96,43,21,82,76,59];
console.log(marks);
console.log(marks.length);
marks[2]=71;
//For Loop in array
for(let i=0;i<marks.length;i++)
{
    console.log(marks[i]);
}
//for of
let cities=["delhi","patna","kolkata","mumbai","hyderabad"];
for (let city of cities)
{
    console.log(city.toUpperCase());
}
//For a given array with marks of students[85,25,58,68,25] find the average 
//marks of the entire class
let a=[85,25,58,68,25];
let sum=0;
for(let i=0;i<a.length;i++)
{
    sum+=a[i];
}
let avg=sum/a.length;
console.log(sum+" "+avg);
//
let b=[250,645,300,900,50];
let offer=1/10;
for(let j=0;j<b.length;j++)
{
    let offer=b[j]/10;
    b[j]-=offer;
}
console.log(b);
//Method in array
//push() method
let foodItem=["potato","apple","litchi","tomato"];
foodItem.push("paneer","rosgulla");
console.log(foodItem);
//pop() method
let delvalue=foodItem.pop();
console.log(foodItem);
console.log(delvalue);
//toString() method
console.log(foodItem.toString());
//concat() method
let marvel=["thor","spiderman","ironman"];
let dc=["superman","batman"];
let heroes=marvel.concat(dc);
console.log(heroes);
//unshift() method
marvel.unshift("antman");
console.log(marvel);
//shift() method
let val=marvel.shift();
console.log("deleted",val);
//slice() method
let superheroes=["thor","shaktiman","krrish","spiderman","superman","batman"];
console.log(superheroes);
console.log(superheroes.slice(1,2));
//splice() method
let arr=[1,2,3,4,5,6,7];
arr.splice(2,2,101,102);
//Practice Question
let companies=["bloomberg","microsoft","uber","google","ibm","netflix"];
companies.shift();
companies.splice(2,1,"Ola");
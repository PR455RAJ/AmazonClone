// let n=2;
// for(let i=0;i<=100;i++)
// {
//     if(i%2!==0)
//     {
//         console.log("num=",i);
//     }
// }
//create a game where you start with any random game number.Ask the user to keep guessing the
//number until the user enters correct value.
let gameNum=25;
let userNum=prompt("Guess the game number:");
while(userNum!=gameNum)
{
   userNum=prompt("Guess the game number again:");
}
console.log("you entered right number");
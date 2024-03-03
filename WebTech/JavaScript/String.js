//String
let str="Apna College";
console.log(str[3]);
//Template Literals
let specialString=`This is a template literal`;
console.log(typeof specialString);
//Template Literal use with example
let obj={
    item:"pen",
    price:10,
};
let output=`the cost of ${obj.item} is ${obj.price} rupees`
console.log(output);
//Escape Character
let st="Apna\nCollege";
console.log(st.length)
//Methods in Strings
//uppercase
st1=st.toUpperCase();
console.log(st1);
st=" PRiTHvi RaJ  ";
//lowercase
st1=st.toLowerCase();
console.log(st1);
//trim
st2=st1.trim();
console.log(st2);
//slice
let s="hello";
console.log(s.slice(1,3));
//concat
let s1="Prithvi";
let s2="Raj";
let s3=s1.concat(s2);
console.log(s3);
//replace
let a="hello";
console.log(a.replace("h","pe"));
//Practice Question
//Prompt the user to their full name.Generate a username for them based on the input Start Username
//with @,followed by their full name and ending with the fullname length.
let x="@";
let z=prompt("Enter the name");
console.log(x+z+z.length);

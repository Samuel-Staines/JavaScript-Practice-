// Concatinating Strings
let firstName = 'Alex';
let LastName = "Tucker";

let fullName = firstName+" "+LastName;
console.log(fullName)
console.log(`${firstName} ${LastName}`)


// Even Or Odd Number
let number = 7;
if(number%2 == 0){
    console.log("Even Number");
}
else
    console.log("Odd Number");


// Appending number to a String
let row = ""+2+3+4+5;
console.log(row);


//understanding Quotes
let name = 'Ron'
console.log("My name is ${name}");
console.log('My name is ${name}');
console.log(`My name is ${name}`);


//understanding operator 
let expression = (10>5);
console.log(`${expression}`);


//Unserstanding assignment operator
let val =12, val2 = 12;
val += val;
val2 =+ val2;
console.log(`val1:${val} val2:${val2}`)


//Switch
//firstName="Tod";
switch(firstName){
    case 'Alex':
    case 'Tod':
        console.log(true); break;
    default:
        console.log(false);
} 

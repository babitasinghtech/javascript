// //Operators in JavaScript

// console.log("aa gya mja")

// // Addition
// let num1 = 25;
// let num2 = 36;
// let num3 = 56;

// let sum = num1 + num2 + num3;
// console.log(sum);    // 117

// // substration

// let val1 = 145;
// let val2 = 98;
// let sub = val1- val2;
// console.log(sub); //47


// // multiplication

// let dig = 13;
// let dig2 = 12;
// let multi = dig * dig2;
// console.log(multi);  //156

// // exponentiation


// let x = 5;
// let y = 5;

// let ans = x ** 3;         //5*5*5
// console.log(ans);      // 125

// ans = x ** y;        // 5*5*5*5*5
// console.log(ans);      // 3125


// //divied

// let g = 112;
// let g2 = 6;

// let div= g/g2;
// console.log(div);       //18.666666666666668


// //module

// let f = 118;
// let f2 = 12;
// let mod = f%f2;
// console.log(mod);       //10

// // Increment & decrement
// // Increment & decrement operators operators are used to increment or decrement a numeric value by 1.

// // Increment operator is denoted by '++', and the decrement operator is denoted by '--'.


// let h = 10;
// let j = 22;

// h++;
// ++h;
// console.log(h);      //11

// j--;           
// --j;
// console.log(j);       //21

// //Assignment Operators

// let firstname = "Babita ";
// let s = 4;
// console.log(firstname);       //babita
// console.log(typeof(s));               //number //4


// //Comparison Operators

// let w = 14;
// let v= 16;
// console.log(w == v);            //false

// //  AND (&&)

// let alert1 = true;
// let alert2 = false;
// let alert3 = true;

// console.log(alert1 && alert2);    // false
// console.log(alert2 && alert3);    // false
// console.log(alert1 && alert3);     //true

// //OR (||)

// let k1 = true;
// let k2 = false;
// let k3 = false;
// console.log(k1||k2);             //true
// console.log(k2||k3);              //false
// console.log(k3||k1);             //true


// //NOT (!)


// let alert6 = false;
// let alert7;
// let alert8 = NaN;
// let mySum = 45;
// let gone = false;
// let isFirst = true;

// console.log(!alert6);      // true
// console.log(!alert7);      // true
// console.log(!alert8);      // true
// console.log(!mySum);       // false
// console.log(!gone);        // true
// console.log(!isFirst);     // false


// //Bitwise Operators

//AND(&)

let r = 5;
let r3 =6;
console.log(r & r3);

//Bitwise OR (|)

let num1 = 5;
// Binary representation of 5 : 0 1 0 1

let num2 = 8;
// Binary representation of 7 : 0 1 1 1

console.log(num1 | num2);         // 5


//Left Shift (<<)

// Left shift operator is denoted by '<<'. It shifts the bits of the left operand to the left, by a number of positions specified by the right operand. 0 comes in the place of the least significant bit after each shifting is done.

// For example, the binary representation of 5 is '00000101',

// Now, when we use '5 << 2', it means we want to shit the binary representation of 5 left by 2 positions and then it becomes '00010100',

let num9 = 5;
// Binary representation of 5 : 0 0 0 0 1 0 1

let num7 = 8;
// Binary representation of 7 : 0 0 0 1 0 0 0

console.log(num9 << 3);    // 5*2*2*2= 40
console.log(num7 << 2);     //8*2*2= 32

//Right Shift (>>)

//Right shift operator is denoted by '>>'. It shifts the bits of the left operand to the right, by a number of positions specified by the right operand preserving the sign of the original number. 

let num5= 16;
// Binary representation of 5 : 0 0 0 0 1 0 1

let num3 = 8;
// Binary representation of 7 : 0 0 0 1 0 0 0

console.log(num5 >> 3);     //16/2= 8/2= 4/2=2 
console.log(num3 >> 2);     // 8/2=4/2= 2

//Ternary Operators


let myAge = 21;

(myAge >= 18) ? (console.log("Can Drive")) : (console.log("Cannot Drive"));

// Output : Can Drive
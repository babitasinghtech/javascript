//Reference datatypes in JavaScript

// const data = '{"name": "John", "age": 25}';  // सही JSON string
// const parsedData = JSON.parse(data);  
// console.log(parsedData);
  let obj = {
    name :"Love",
    age: 23,

  };
  console.log(obj)

  //shalow copy &  deep copy

  let arr = [1,2,3,4,5,9,3,4,6,1,5]
  arr.sort()

  console.log(arr)

  //Dot notation
//Bracket Notation

let person = {
    name: "Mayank",
    age: 21,
    country: "India"
};

//Dot Notation
console.log(person.name);      // Mayank

//Bracket Notation
console.log(person['name']);   // Mayank


//changing properties of object:

let person2 = {
  name: "Mayank",
  age: 21,
  country: "India"
};
person2.isSleeping = false;
person2.age = 22;
delete person2.country;
console.log(person2);        //name: 'Mayank', age: 22, isSleeping: false


//Functions in objects:


let person3 = {
    name: "Mayank",
    age: 21,
    country : "India",
    message: function() {
        console.log("Hello, my name is " + this.name);
    }
};

person3.message();     // Output: Hello, my name is John

//Arrays


let fruits = ["Apple", "Banana", "Orange"];

let primeNumbers = [3, 5, 7, 11, 13];

let data = [true, 'ab', "great", 34];

console.log(fruits);
console.log(primeNumbers);
console.log(data);

//Accessing the items in an array:

let fruitsa = ["Apple","Banana","Orange"];
let fruitsa3 = fruitsa[1];
console.log(fruitsa3);

// let primeno5 = primeno5[0];
// console.log(primeno5);

let formt = [true, 'ab', "great",34];
let formt3 = formt[2];
console.log(formt3);

//push : Adds an item to the end of the array.
// unshift : Adds an item to the beginning of the array.
// pop : Removes the last item from the array.
// shift : Removes the first item from the array.

// Adding items in an array

let fruits8 = ["Apple", "Banana", "Orange"];

fruits8.push("Kiwi");

fruits8.unshift("Grapes");

console.log(fruits8);        // Output : [ 'Grapes', 'Apple', 'Banana', 'Orange', 'Kiwi' ]

//Deleting items in an array:

let fruits9 = ["Apple", "Banana", "Orange"];

fruits9.pop();

fruits9.shift();

console.log(fruits9);       // Output : [ 'Banana' ]

//Functions

//Functions can be defined using the function keyword followed by a name, a list of parameters (optional), and a block of code enclosed in curly braces {}.


function sum(x, y){
    let result = x + y;
    return result;
}

let output = sum(3, 8);
console.log(output);         // 11

//Anonymous functions in JavaScript
//JavaScript also supports anonymous functions, which are functions without a name. They are assigned to variables or passed as arguments to other functions. They are particularly useful in situations where a function is needed temporarily or as a callback function.
//Assignment to a variable:


var add = function(x, y) {
  return x + y;
};
// var output3 = add3(3,6);
//console.log(add);

//Numbers


let integerNumber = 3;
console.log(typeof(integerNumber));    // number

let floatNumber = 3.14;
console.log(typeof(floatNumber));       //number

let result = integerNumber + floatNumber;
// Result will be a floating-point number

console.log(result);    // 6.14




//Airthmetic Task


let number1 = 13;
let number2 = 10;

let addi = number1 + number2;
console.log(addi);                     // 23

let product = number1 * number2;
console.log(product);                // 103

let quotient = number1/number2;
console.log(quotient);               // 1.3


//Uppercase and Lowercase methods on strings

let string = "hello world";

let upperCaseString = string.toUpperCase();
console.log(upperCaseString);

let lowerCaseString = string.toLowerCase();
console.log(lowerCaseString);


//Separator: Here in join method using the separator string is optional. The string used to separate each element of the array when they are concatenated into the resulting string.

let array = ["India", "is", "the", "best"];

let message1 = array.join(" ");
console.log(message1);

//Output : India is the best

let message2 = array.join();
console.log(message2);

//Output : India,is,the,best
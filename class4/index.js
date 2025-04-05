//Literals in JavaScript
//String literals
let firstname = "Rohit";
let lastname =  "Singh";
let fullname = firstname + " "+ lastname;
console.log(fullname);

//Template Literals

let name = `rahul
singh`;
console.log(name);


let string1 = "Mai pal do pal ka shayar hoon";

let string2 = "Pal do pal meri kahani hai";

let multiLineString = `
    ${string1},
    ${string2}`

console.log(multiLineString);

/*
Output :
    Mai pal do pal ka shayar hoon,
    Pal do pal meri kahani hai
*/


//Object Literals


let person = {
    name: 'Mayank',
    age: 21,
    isRunning : true
};

console.log(person.name);
console.log(person.age);

//Array Literals


let colors = ['orange', 'red', 'aqua', 'green', 'blue'];
console.log(colors)

//If else statements


let speed = 87;

if(speed > 90){
    console.log("OverSpeeding");
}

if(speed > 50 && speed <=90){
    console.log("Normal");
}

if(speed <= 50){
    console.log("Slow");
}

// Output: "Normal"

//If-else Statement: for multiple condition


let myAge = 15;

if(myAge >= 18){
    console.log("I can Drive");
}else{
    console.log("Cannot Drive");
}

// Output : "Cannot Drive"



//If-else-if Statement


let weight = 65;

if (weight > 70) {
    console.log("You are Overweight");
} else if (weight > 50 && weight <= 70) {
    console.log("You are Fit");
} else {
    console.log("You are Underweight");
}

// Output : "You are Fit"

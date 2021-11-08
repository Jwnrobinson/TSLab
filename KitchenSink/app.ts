// "Josh"  // string literal
// 50 // number
// ["Josh", "Jake"] // array literal
// { name: "Josh" } // object literal

// string of my name
let myName: string = "Juwan";

// Tried this but it didn't. Im so sorry
const numberOfStates: number = 50;

// computed result of 5 plus 4.
let result = 5 + 4;

function sayHello() {
    alert("Hello World!");
}

sayHello();

function checkAge(name: string, age: number) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!")
    }
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let myFavoriteVeggies: string[] = ["Bok Choy", "mushrooms", "leeks", "artichoke", "okra"];

for (let i = 0; i < myFavoriteVeggies.length; i++) {
    console.log(myFavoriteVeggies[i])
}

let pet: {name: string, breed:string} [] = [
    {
    name: "Shiloh",
    breed: "Terrier"
}
];
console.log('My Pet: ${pet}');

let people:{name: string, age: number} [] = [
    {
        name: "Josh",
        age: 27
    },
    {
        name: "Jake",
        age: 35
    },
    {
        name: "Garrett",
        age: 22
    },
    {
        name: "Bruce",
        age: 10
    },
    {
        name: "Tom",
        age: 18
    }
];
console.log (people[0]) 

for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}

function getLength(word) {
    return word.length
}

let stringLength = getLength("Hello World!");

if (stringLength % 2 == 0) {
    console.log('The world is nice and even!') 
} else {
    console.log('The world is an odd place!')
}

stringLength = 1 // sets the value 

stringLength == 1 // true or false
stringLength === 1 // true or false

"1" // true

// function calcFinalScore(score, penalties) {
//     return score - penalties
// }

// calcFinalScore(5, 2);
// calcFinalScore(20, 0);

// runEverything()
// doSomethingElse()

// function runEverything() {
//     "Josh"  // string literal
//     50 // number
//     ["Josh", "Jake"] // array literal
//     { name: "Josh" } // object literal

//     // string of my name
//     let myName = "Josh";

//     // Tried this but it didn't. Im so sorry
//     const numberOfStates = 50;

//     // computed result of 5 plus 4.
//     let result = 5 + 4;
// }

// function doSomethingElse() {
//     console.log("hi!");
// }

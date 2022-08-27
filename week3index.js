// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93
let ages = [3, 9, 23, 64, 2, 8, 28, 93]; // array of ages

//Question 1a
let agesMath = ((ages[ages.length - 1]) - ages[0]); //programmatically subtracted ages 
console.log(agesMath);

//Question 1b
ages.push(35)// add a new age to your array

let newResult = ((ages[ages.length - 1]) - ages[0]); //testing with new values 35 - 3
console.log(newResult);

//Question 1c
let sum = 0;             // Loop to generate average
    for (let age of ages) {
        sum += age;
    }
    sum /= ages.length;
    console.log (sum);

//Qustion Number 2 /

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//Question 2a
//average number of lettters in each name:

let lengths = names.map(function(element) {
    return element.length;
});
console.log(lengths); // testing the map function

let total = 0;
    for (let length of lengths) {
            total += length;
    }
    total /= lengths.length;
    console.log (total);

//Question 2b    
// use a loop to concatenate and print the names: 

allNames = " ";
for (let group of names) {
    group += names + " ";
}
console.log(allNames);

// Question 3 You access the last element of the array by using the zero based counting system. 
console.log (names[5]); // in the case of the names array
// Question 4 You access the first element of the array with the index [0]
console.log (names[0]);

//Question 5
let nameLengths = [];

nameLengths.push (lengths); // Pushing function from above to input name lengths

console.log (nameLengths); // checking name lengths are now in the array

//Question 6

let nameLengthsTotal = 0; // Total character length in the array "nameLengths"
    for (let length of lengths) {
            nameLengthsTotal += length;
    }
    console.log (nameLengthsTotal);

// Question 7

function repeatString (word, n){
    let add = word;
    for (let i = 1; i <= n; i++) {
        add = add.concat(word);
    } return add;
}
console.log(repeatString("hello", 4));

// Question 8

function createFullName (firstName, lastName) {
    console.log(firstName + " " + lastName);
}

createFullName("Tom" , "Brady");

// Question 9 

const countingNumbers = [25, 36, 57, 9, 1, 15];

const sumofNumbers = countingNumbers.reduce((accumulator, value) => {
    return accumulator + value;
}, 0);

if (sumofNumbers >= 100) {
    console.log(true);
}


// Question 10
anArray = [1,2,3,4,5]; // my array

const avgofNums = anArray.reduce((accumulator, value) => { // function to return the average of data set
    return accumulator + value;
}, 0);

console.log(avgofNums/anArray.length);


// Question 11

oneArray = [1,40,16,8,10]; // set up arrays
twoArray = [2,4,6,8,10];

let avgOne = 0; // average of array 1
for(let i = 0; i < oneArray.length; i++) {
    avgOne += oneArray[i];
}
let avgOfAry1 = avgOne / oneArray.length;

let avgTwo = 0; // average of array 2
for(let i = 0; i < twoArray.length; i++) {
    avgTwo += twoArray[i];
}
let avgOfAry2 = avgTwo / twoArray.length;

if (avgOfAry2 < avgOfAry1) {    // boolean comparison of array1 and 2
    console.log (true) 
    } else {
     console.log (false)
    }
           

// Question 12

function willBuyDrink (isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket >= 10.50) {
        console.log ("Yes, I will buy a drink!");
    } else {
        console.log ("No, I can't buy a drink.");
    }
}

willBuyDrink (true, 10.45);

// Question 13

function amIFastOnTheDraw (manThatIsQuick, shotTimerReadout) {
    if (manThatIsQuick === true && shotTimerReadout <= 1.00) {
        console.log ("Wow that's fast Quick Draw!");
    } else if (shotTimerReadout <= 1.25) {
        console.log ("Hmmm need some work Snail");
    }   else {
        console.log ("Did you even try?");
    }
}

amIFastOnTheDraw (true, 1.00);
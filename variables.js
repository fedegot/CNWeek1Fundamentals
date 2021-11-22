let i = 10;
i += 2;
console.log(i);

console.log( `+++++++++++++++++SOLUTION 1+++++++++++++++++++++++++++`)


// let name = "Bravo";
// let age = "35";
// let favColour = "brown";

// console.log(`Hi! my name is ${name} and I have ${age} years old and my favourite color is ${favColour}`);

// name = "Alpha";
// age = "376";
// favColour = "pink";

// console.log(`Hi! my name is ${name} and I have ${age} years old and my favourite color is ${favColour}`);




console.log( `+++++++++++++++++SOLUTION 2+++++++++++++++++++++++++++`)

let breakfast = "tostie";
let lunch = "pasta bake";
let dinner = "jackie potatoe";

console.log(`I had ${breakfast} this morning and for lunch I'm going to have ${lunch} and I'm thinking to have a ${dinner} for tie`);

breakfast = "a full english"
lunch = "nandos"
dinner = "sandwechees"

console.log(`instead tomorrow for I'm going to have ${breakfast} for lunch a ${lunch} and for dindin ${dinner}`);


console.log(`+++++++++++++++++SOLUTION 3 DATE OF BIRTH+++++++++++++++++++++++++++`)

const dateToday = new Date('2021-11-16');
const dOB = new Date('2021-06-18');
let result = new Date(dOB - dateToday);
let days = result/1000/60/60/24;
console.log(`it's missing ${days} days for your next birthday`);

console.log(`+++++++++++++++++SOLUTION 4+++++++++++++++++++++++++++`)

var space1 =(`   |      |  `);
var space2 =(` X |  O   |  `);
var space3 =(` X |  X   |  `);
var space4 =(` O |      |  `);

var row = `-----------`

console.log(` ${space1}\n ${space2} \n ${space1} \n  ${row} \n ${space1}\n ${space3}\n ${space1} \n  ${row} \n ${space1} \n ${space4} \n ${space1}`);



console.log(`+++++++++++++++++ELSE IF+++++++++++++++++++++++++++`)

// let weather = "sunny";

// if (weather == "sunny"){
//     console.log("well, I better wear some suncream!")
// }else if (weather == "rainy"){
//     console.log("better take an umbrella")
// } else {
//     console.log("hummm it coul go either way!")
// }


let place ="manc";
let weather = "cloudy";

if (place == "manc" || weather == "sunny"){
    console.log("check again");
}
else if (place == "manc" || weather == "rain"){
    console.log("obvs");
}
else { 
    console.log("what it isn,t raining")
}


// switch(expression){
//     case x:
//         //code here
//         break;
//     case y:
//         //code here
//         break;
//     default:
//         //code here
// }

const grade = 87;

switch (true) {
    case grade >= 70:
        console.log("Distinction");
        break;
    case grade >= 60:
        console.log("merit");
        break;
    case grade >= 50:
        console.log("pass");
        break;
    default:
}



console.log(`+++++++++++++++++ EXERCISE 1+++++++++++++++++++++++++++`)


let age = 18;
let country = "UK";

if (age >= 17 && country == "UK"){
    console.log("Yes I can serve you");
}
else if (age <= 17 || country == "UK"){
    console.log("You aren't old enough");
}


console.log(`+++++++++++++++++ EXERCISE 2+++++++++++++++++++++++++++`)
// Create a variable for any pizza topping.
// 
// Create a switch statement, if the topping is one of your
// favourite ingredients, log to the console “These are
// important ingredients for my pizza.” If you don’t mind
// having Pepperoni for example log to the console “I don’t
// mind having ${topping} on my pizza.
// Finally, for any topping you don’t like log “${topping}
// should not be on a pizza.”

let top1 = "Ham, Mozzarella, Mushrooms";
let topFav = "Ham, Mozzarella, Mushrooms";
let topDis = "Pinapple";
let pep = "Peperoni";


switch(true) {
    case top1 == topFav:
        console.log(`${top1} These are important ingredients for my pizza`);
        break;
    case top1 == pep:
        console.log(`I don’t mind having ${pep} on my pizza.`);
        break;  
    case top1 == topDis:
        console.log(`${topDis} should not be on a pizza.`);
        break;  
    default:
        console.log("blabla")
}

console.log(`+++++++++++++++++ EXERCISE 3+++++++++++++++++++++++++++`)
// Create a variable called password.
// JS
// Check how many letters are in the password, if there are
// less than 8, log to the console that the password is too
// short. Otherwise log the password to the console. 

let password = "bimbumbam";

if (password.length < 15){
    console.log(`the password is too short`);
}else if (password.length > 15){
    console.log(password);
}

// Create a variable called num.
// Check if the variable is divisible by 3 or 5. If it
// is, log “This number is divisible by 3 or 5”.
// Otherwise log something else.

let num = 15;
let div = Number.isInteger(num/5);
let div2 = Number.isInteger(num/3);

if (div == false && div2 == false){
     console.log(`you can not devide the number by 3 or 5`);
} else{
     console.log("this number is divisible by 3 or 5");
     }


console.log(`+++++++++++++++++ EXERCISE 4+++++++++++++++++++++++++++`)
// Create a variable called num.
// If num is divisible by 3 log “fizz” to the console, if it’s divisible by
// JS
// 5 log “buzz” to the console, if it’s divisible by both 3 and 5 log
// “fizz buzz” to the console. Otherwise log num to the console.


let num2 = 15;

let div3 = Number.isInteger(num2/5); //check if the num/5 is an integer
let div4 = Number.isInteger(num2/3); //check if the num/3 is an integer


if (div3 == true && div4 == true){
    console.log(`fizz buzz`)
}
else if(div3 == true){
    console.log(`buzz`)
} else if (div4 == true){
    console.log(`fizz`)
} else {console.log(num2);}

console.log(`+++++++++++++++++ EXERCISE 5+++++++++++++++++++++++++++`)
// Create a variable called num.
// Check if the number is a palindrome (looks the
// same forward as it does backwards e.g. 1001 or
// 20202). 

let numbers = 1005;

function reverse(numbers){
    return (
        parseFloat(
          numbers
            .toString()
            .split('')
            .reverse()
            .join('')
        ) * Math.sign(numbers)
      )                 
    }
    result = reverse(numbers);
    console.log(result);


    console.log(`+++++++++++++++++ EXERCISE 6+++++++++++++++++++++++++++`)
    // Create a variable called time, a variable called placeOfWork
    // and a variable called townOfHome. Create an if statement that
    // logs to the console where someone is at times of the day. E.g. if
    // the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work. 

    let time = 7
    let placeOfWork = "Garage"
    let townOfHome = "Manchester"

    if (time == 7){
        console.log(`I'm in ${townOfHome} to work in ${placeOfWork}`);
    } else if (time == 8){
        console.log(`I'm commuting`);
    } else (time == 9);{
        console.log(`I'm at work`)
    }

    console.log(`+++++++++++++++++ EXERCISE 7+++++++++++++++++++++++++++`)
    // Take the string
    // “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh
    // gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the
    // index of a last vowel in the string.

    let paragraph = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
    let searchTerm = 'u';
    console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);

    console.log(`+++++++++++++++++ EXERCISE 8+++++++++++++++++++++++++++`)
//     Create a variable called word that takes a string. Create
//     an if statement that checks if the last letter is the same as
//     the first. If it is return true, otherwise return false.

let word = `freedom`
let last = word.charAt(word.length-1);
let first = word.charAt(0);

// console.log(slice);
// console.log(charAt);
if (last == first){
    console.log(true);
} else if (console.log(false));

console.log(`+++++++++++++++++ EXERCISE 9+++++++++++++++++++++++++++`)
// Create two variables called num1 and num2.
// Create an if statement that checks if the result of the
// sum is even. If it is return the number, otherwise return
// the numbers multiplied together.

let num1 = 30
let num22 = 14
let sum = num1 + num22
let sum1 = num1 * num22
if (sum % 2 == 0){
    console.log(`the sum is even`)
} else if (sum1 % 2 == 0){
    console.log(`try this`)
};




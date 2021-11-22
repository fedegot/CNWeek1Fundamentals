
// ///////////// ARRAYS /////////////////////////


// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
// ];

// console.log(coffeeOrder[2]); // print just the second item of the array


// coffeeOrder[1] = "Ann - Vanilla latte" //update the array like a variable

// console.log(coffeeOrder.length); // propreties of the arrys and check the amount of the items 

// coffeeOrder.push("Donna - espresso"); //>> .push << is the method to insert or add in this case "Donna - Espresso"
// coffeeOrder.pop();//.pop remove the last item of the arrays

// ///// ESERCIZIO ////
// let favSongs = [
//     "Oasis - wonderwall",
//     "Backstreet Boys - I want it that way",
//     "Queen - Don't stop me now"
// ]

// favSongs.push("Queen - bicycle race", "Queen - Now I'm here");
// favSongs.pop();
// favSongs.unshift("Michael Jackson - Smooth Criminal") // Add at the start of the array the item
// console.log(favSongs)


// ///////// LOOPS //////////////////////////


// let favDrinks = [
//     "Cocacola",
//     "Pepsi",
//     "Coffee"
// ];

// // console.log(favDrinks[0]);
// // console.log(favDrinks[1]);
// // console.log(favDrinks[2]);


let shoppingList = ["eggs", "milk", "bread"]
console.log(shoppingList[2][1])

// //FOOR LOOPS

// for (let i = 0; i < favDrinks.length; i++){
//     console.log(favDrinks[i]);
// }

// //WHITE LOOPS   

// let age = 15;

// while (age< 18){
//     console.log("youre a child");
//     age++;
// }
// console.log("youre an adult");



console.log("////////////////////////////////////////ACTIVITY 1////////////////////////////////////////");

// Create an array that lists your favourite films, up to 5 elements.
// Add 2 more using a method.
// Use a loop to cycle through the array

let favMovies = [ "Batman","Titanic","Braveheart","Movie4","Movie5"]
favMovies.push("Movie6", "Movie7");

//console.log(favMovies);

for (i = 0; i < favMovies.length; i++){
    console.log(favMovies[i]);
}


console.log("////////////////////////////////////////ACTIVITY 2////////////////////////////////////////");
// Generate 6 random numbers between 1-50

for (i = 0; i < 6; i++){
    console.log(Math.floor(Math.random()*50))
};

console.log("////////////////////////////////////////ACTIVITY 3////////////////////////////////////////");
//If we can create a loop to put 0-9 on the screen,
//how can we count from 9-0?
 for (i = 9; i > -1; i--){
     console.log(i);
 }
 console.log("////////////////////////////////////////ACTIVITY 4////////////////////////////////////////");
// Displays 4 films stored in an array. JS
// Use a for loop to show each film in the array.
// Use an if statement to check if the 3rd film in the array is
// Ghostbusters.
// If it is, return “Yay it’s Ghostbusters”. If it isn’t return “Boo!
// we want Ghostbusters!

let movies = ["Jurassic Park", "Titanic", "Ghostbusters", "Brave"]
//let rev = movies.join() // array to string
//console.log(rev) 
for (i = 0; i < movies.length; i++){
   

     if (i == movies.indexOf("Ghostbusters")){
        console.log(i + ` Yay it’s Ghostbusters`)
     } else {console.log(i +` Boo! we want Ghostbusters!`)}
 }

 console.log("////////////////////////////////////////ACTIVITY 5////////////////////////////////////////");

//  Create a variable, generate a
//  random number between 1 and
//  30 six times, each random
//  number generated, check if this
//  number of divisible by 7 or not.

for (i = 0; i < 6; i++){
    let dive = (Math.floor(Math.random()*30))
    if (dive % 7 === 0){
        console.log(`${dive} its divisible by 7`)
    } else {console.log(`${dive} no is not divisible by 7`)};
    }

    console.log("////////////////////////////////////////ACTIVITY 6////////////////////////////////////////");
//     Imagine you’re a programmer for a social media platform! You have
// been tasked with building a prototype for a mutual followers program.
// > Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers.
// In these arrays place 4 names as strings. Make sure there are 2 names
// that are in BOTH arrays.
// > Using a nested loop iterate over both arrays and console.log out the
// matching follower.

let bobsFollowers = ["Martha", "Pablo", "Adele", "Victor"]
let hannahsFollowers = ["Adele", "Pablo", "Luigi", "Mario"]

// for (let i = 0; i<2; i++){
//  if (bobsFollowers.includes("Pablo","Adele") && hannahsFollowers.includes("Adele","Pablo")){
//      console.log(i +  ` Pablo and Adele are present in the lists`);
//  } else {console.log(`There is not name present in both lists`)};



 for ( let i = 0; i < bobsFollowers.length ; i++ ) {
    for (let k = 0; k < hannahsFollowers.length ; k++) {
        if (bobsFollowers[i] == hannahsFollowers[k]) {
            console.log(`${bobsFollowers[i]} is a follower of Bob and Hanna`)
        }
    }
}


console.log("////////////////////////////////////////ACTIVITY 7////////////////////////////////////////");

// Setup
const myArray = [];

// Only change code below this line
for (let i= 0; i <10; i += 3){
  myArray.push(i);
}
console.log(myArray)

let offer = "nome";
let time= 1200;

const caffe = {
    name: "whitesheep",
    seatingcapacity: 100,
    specialOffer: true,
    drinks: [
        "capuccino",
        "latte",
        "tea",
        "hot chocolate"

    ],
    breakfastOffer: "Free croissant with coffee",
    lunchOffer: "free drink with surpreslgy priced sandwich",
    noOffer: "Sorry no offer",

    openCafe(){
        if(this.SpecialOffers){
            return "time for a special offer!";
        }
    },
    closeCafe(){
        return "we are closed";
    }

};

console.log(caffe.openCafe());

// if (time<1100){
//     offer = caffe.breakfastOffer;
//     console.log(offer);
// } else if ( time< 1500){ 
//     offer = caffe.lunchOffer;
//     console.log(offer);
// }

// const person = {
//     name: "Fred",
//     age: 32,
// }

// console.log(person.name);// should print the name 

// let day = "sunday"
// const alarm = {
//     weekendAlarm: "no alarm needed",
//     weeldayAlarm: "get up at 7am",

// };

// if (day == "saturday" || day == "sunday")
// console.log(alarm.weekendAlarm )
// else console.log("get up at 7am")







// const favSongs = { 
//     metal: "Slipknot",
//     rock: "Dio",
//     pop: "Jackson",
// };

// console.log(favSongs.metal)




console.log(`/////////////////////////////ACTIVITY 1/////////////////`)
// Let’s edit our person object to include…
// A function called sayHi and when it’s called, it
// should return “Hello my name is ${this.name}”

const person = {
    name: "Federico",

    sayHi(){
        if(this.sayHi){
            return "Hello my name is " +  this.name;
        }
    }
}
console.log(person.sayHi())


console.log(`/////////////////////////////ACTIVITY 2/////////////////`)
// Create an object called pet with the key values of:
// name, typeOfPet, age, colour
// And methods called eat and drink. They should return a
// string saying [Your Pet Name] is eating/drinking.


const pet = {
    name: "Dio",
    typeOfPet: "Cat",
    age: 12,
    colour: "Black",
    eat(){
        return `${this.name} is eating`
    },
    drink(){
        return `${this.name} is drinking`

    }
    }

console.log(pet.eat()+ " " + pet.drink())

console.log(`/////////////////////////////ACTIVITY 3/////////////////////`)


// Create an object called coffeeShop with key values of: branch, drinks with prices, food with prices
// And methods called drinksOrdered and foodOrdered.
// They should return a string saying [Your order] is … with all items chosen with costs and total costs. 


const coffeeShop = {
    branch: "Manchester",
    drinks: {
        drink1: {name: "Coke", price: 2},
        drink2: {name:"Fanta", price: 4},
        drink3: {name: "7up", price: 4},
        drink4: {name: "RedBull", price: 4},
    },
    foods: {
       food1: {name: "Baps", price: 3},
       food2: {name: "Chips", price: 4},
       food3: {name: "Scraps", price: 5},
       food4: {name: "Tacos", price: 6},
    },

    totalDrinks(){
        return coffeeShop.drinks.drink4.price + coffeeShop.drinks.drink1.price
   },
    orders(){
        return coffeeShop.drinks.drink4.name + ` and a ` + coffeeShop.drinks.drink1.name
    }
   
}
 
console.log(`Your order is with ${coffeeShop.orders()} drinks chosen and  with costs and total ${coffeeShop.totalDrinks()}£`)
    
 

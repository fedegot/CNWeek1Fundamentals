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

let coffeeShop.foods = master;

const coffeeShop = {
    branch: "Manchester",
    drinks: [
        {itn: 1, name: "Coke", price: 2},
        {itn: 2, name:"Fanta", price: 4},
        {itn: 3, name: "7up", price: 4},
        {itn: 4, name: "RedBull", price: 4},
    ],
    foods: [
       {itn: 5, name: "Baps", price: 3},
       {itn: 6, name: "Chips", price: 4},
       {itn: 7, name: "Scraps", price: 5},
       {itn: 8, name: "Tacos", price: 6},
    ],

    let master = coffeeShop.foods;
    
    const :takeOrder = (food) => {
        if (master.includes(food) = true){
            console.log(`Your items they are not available in the menu`)
        } else if (food == coffeeShop.foods.indexOf(food)){
            console.log(`the ${this.food} is present and it costs this.`)
        } 
    }


//     drinksOrdered(){
//         return coffeeShop.drinks.drink4.price + coffeeShop.drinks.drink1.price
//    },
//    foodOrdered(){
//         return coffeeShop.drinks.drink4.name + ` and a ` + coffeeShop.drinks.drink1.name
//     }
    
}
takeOrder("Chips");

//console.log(`Your order is with ${coffeeShop.drinksOrdered()} drinks chosen and  with costs and total ${coffeeShop.foodOrdered()}£`)


/////////////////////////////////

// let orderCount = 0;

// const takeOrder = (topping, base) => {
//     //for (i = 0; i < 6; i++)
//     console.log(`Pizza with ${topping} and ${base} base`)
//     orderCount++;
    
// }

// takeOrder("pineapple", "tomato ");


/////////////////////////////////////////////////
    

// const coffeeShop = {
//     branch: "Lytham",
//     drinks: ["Cappuccino", "Latte", "Flat White"],
//     drinkPrices: [3.50, 3.50, 3.25],
//     food: ["Cake", "Crisps", "Sandwich"],
//     foodPrices: [2.50, 1.15, 2.75],
//         drinksOrdered(){
//             return `Your drinks order is ${coffeeShop.drinks[0]} x2, ${coffeeShop.drinks[2]}. Drinks total is £${((coffeeShop.drinkPrices[0]*2)+coffeeShop.drinkPrices[2])}`;
//         },
//         foodOrdered(){
//             return `Your food order is ${coffeeShop.food[2]} x3, ${coffeeShop.food[1]}. Food total is £${(coffeeShop.foodPrices[2]*3)+coffeeShop.foodPrices[1]}`;
//         },
// }

// let totalPrice = coffeeShop.foodPrices[2]*3+coffeeShop.foodPrices[1]+(coffeeShop.drinkPrices[0]*2)+coffeeShop.drinkPrices[2]

// console.log(coffeeShop.drinksOrdered());
// console.log(coffeeShop.foodOrdered());
// console.log(`Your total bill is £${totalPrice}`);
 

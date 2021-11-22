// // const pressGrindBeans = () => {
// //     console.log("Grinding for 20 second");
// // }

// // pressGrindBeans();


// let coffeeIsGrinding = false;

// const pressGrindingBeans = () => {
//  if (coffeeIsGrinding){
//      console.log("stop the grind");
//      coffeeIsGrinding = false;
//  } else {
//      console.log("grinding is about to begin");
//     coffeeIsGrinding = true;
//  }
//  }
//  pressGrindingBeans();



//  //////////////
// let accauntnum = 696635251;


//  const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);


//  }

//  cashWithdrawal(300, accauntnum);
//  cashWithdrawal(300, 50500505); // amount, accnum


 /////////////////

//  const addUp = (num1, num2) => {
// return num1 + num2;
//  }

//  addUp(7,3);// isnt going to print out the resault because we use "return"
//  console.log(addUp(2,5));// now is going to print out the answer




 console.log( `////////////////////// ACTIVITY 1 ////////////////////// `);
//Take this code and turn it into arrow function
//syntax:



// function factorial (n){
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else { 
//         return (n * factorial (n-1));
//     }
// }

// console.log(factorial(33));


const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else { 
        return (n * factorial (n-1));
    }
}

console.log(factorial(33));


console.log( `////////////////////// ACTIVITY 2 ////////////////////// `);

// Edit the below snippet to include two parameters and a 
// running order count updated when the function is called:

let orderCount = 0;

const takeOrder = (topping, base) => {
    //for (i = 0; i < 6; i++)
    console.log(`Pizza with ${topping} and ${base} base`)
    orderCount++;
    
}

takeOrder("pineapple", "tomato ");

console.log( `////////////////////// ACTIVITY 3 ////////////////////// `);
// Cash machine time! 
// Let’s create one that:
// > Dispenses cash if your pin number is correct and your
// balance is equal to, or more than, the amount you’re
// trying to withdraw!


// const pinNumber = 6633215541;
// let balance = 256315.22;
// let resBalance = (balance - withDraw);



// const checkPin = (num) => {
//     if (num == pinNumber){
//         console.log(`The PIN number you just insert is right, your balance is ${balance}$ \n and you want to withdraw ${amounDraw}$, your resoult balance will be ${resBalance}, \n Thank you and see you soon.`)
//     } else { console.log(`The PIN number you just insert isn't right please try again`)}
    

// const withDraw = (amounDraw) => {
//     if (amounDraw <= 0){
//         console.log(`Sorry your balance is too low, go back to get more money!`)
//     }
// }
// }




// checkPin(6633215541);
// withDraw(556);



// let listPin= ["6633215541", "663321341", "66325541", "6632235541" ]
// const pinNumber = listPin.indexOf("6633215541");
// let balance = 256315.22;



const pinNumber = 6633215541;
let balance = 256315.22;

//let resBalance = ();


const checkPinAndAmount = (num , amounDraw) => {
    if (num == pinNumber && amounDraw <= balance) {
        console.log(`The PIN number you just insert is right, your balance is ${balance}£ \nand you want to withdraw ${amounDraw}£, your balance will be ${balance - amounDraw}£, \nThank you and see you soon.`)
    } else if (amounDraw >= balance) { console.log(`Sorry your balance is too low, go back to get more money!`)
    } else console.log(`The PIN number you just insert isn't right please try again you can do 3 times`)
    }
   


checkPinAndAmount(6633215541,556); // first number is the PIN code and the second number the amount ££ to widraw



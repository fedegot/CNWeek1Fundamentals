console.log("ksdkaksdaks".toUpperCase());
console.log(Math.random());

console.log(Math.floor(Math.random()*10));



console.log( `+++++++++++++++++SOLUTION 1+++++++++++++++++++++++++++`)
// solution 1
console.log("  |     |");
console.log("  |     |");
console.log("  |     |");
console.log("-----------");
console.log("  |     |");
console.log("  |     |");
console.log("  |     |");
console.log("-----------");
console.log("  |     |");
console.log("  |     |");
console.log("  |     |");
console.log( `+++++++++++++++++SOLUTION 2+++++++++++++++++++++++++++`)

//solution 2
var column =`   |     | \n   |     | \n   |     | `;

var row = `-----------`

console.log(`${column}\n ${row} \n${column} \n ${row} \n${column}`);

console.log( `+++++++++++++++++SOLUTION 3 LOOPS+++++++++++++++++++++++++++`)

//solution 3
function matr(){
    for (let i = 0; i < 4; i++) {
        console.log("  |     |");}
              };
      matr()
      console.log("-----------");
      matr()
      console.log("-----------");
      matr()
    
 //   for (var c = 0; c < 4; c++) {
  //      console.log("  |     |")};
    

  console.log( `+++++++++++++++++SOLUTION 3 ARRAYS+++++++++++++++++++++++++++`)

  const grid = ["  |     |", "-----------"];
let col = grid[0];
let row2 = grid[1];

/////////// REPETITIVE METHOD I DON'T LIKE IT ///////
// console.log(`${col}\n${col}\n${col}\n${row2}`); //
// console.log(`${col}\n${col}\n${col}\n${row2}`); //
// console.log(`${col}\n${col}\n${col}`);          //

function metr() {
for (let i = 0; i < 4; i++){
console.log(col);}
}
metr();
console.log(row2);
metr();
console.log(row2);
metr();







// search another String Method 

  let text = "The weather outside is beautiful";
let newText = text.replace("beautiful", "horrendus"); //swap two words
let newnew = newText.toUpperCase() // capital letters
console.log(newnew);
         




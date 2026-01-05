/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

let r = Math.random() * 100;
r = Math.floor(r);
console.log(r);
let a = prompt("Enter First Number");
let b = prompt("Enter the Operation");
let c = prompt("Enter Second Number");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (r >= 10) {
  //perform correct calculaltion
  console.log(`You enter is ${a} ${b} ${c}`);
  alert(`The result is ${eval(`${a} ${b} ${c}`)} `);
} else {
  //perforn wrong calculation
  console.log(`You enter ${a} ${b} ${c}`);
  alert(`The result is ${eval(`${a} ${b} ${c}`)} `);
}

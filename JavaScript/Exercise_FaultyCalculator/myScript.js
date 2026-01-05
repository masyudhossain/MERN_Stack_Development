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

let a, b;

function calculator(a, b) {
  console.log("Addition " + (a + b));
  console.log("Subtraction " + (a - b));
  console.log("Division " + a / b);
  console.log("Multiplication " + a * b);
}

function faultyCalculator(a, b) {
  console.log("Addition " + (a - b));
  console.log("Subtraction " + a / b);
  console.log("Division " + a ** b);
  console.log("Multiplication " + a + b);
}

let i = Math.random() * 100;
k = Math.floor(i);
if (k <= 10) {
  console.log("Faulty Calculator");
  faultyCalculator(6, 2);
} else {
  console.log("Normal calculator");
  calculator(6, 2);
}

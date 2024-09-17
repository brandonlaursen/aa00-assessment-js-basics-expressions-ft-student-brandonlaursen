/*
Numbers: Use what you have learned about variables, numbers, and arithmetic
operations to complete the steps below.

Implement the following steps so that all test specs pass when you run the
following command in your terminal:
npm test test/03-numbers-spec.js
*/

let num1 = 10;
let num2 = 3;
let num3 = 0;

// Predict the outcome of each operation. (You will store your predicted results
// in new variables at the end.)

// 1. Set num1 equal to the difference between num1 and num2
// Your code here 



// 2. Set num1 equal to the product of num1 and num2
// Your code here 



// 3. Set num2 equal to the quotient when num3 is divided by num1
// Your code here 



// 4. Set num3 equal to the sum of num1 and num1
// Your code here 



// 5. Set num3 equal to the sum of num1 and 5 
// Your code here 



// 6. Set num1 equal to the remainder of num3 divided by 4
// Your code here 



// 7. Define a variable called predictNum1 and set it to the value that you
//    think num1 will be after all the operations above are done.
// Your code here 



// 8. Define a variable called predictNum2 and set it to the value that you
//    think num2 will be after all the operations above are done.
// Your code here 



// 9. Define a variable called predictNum3 and set it to the value that you
//    think num3 will be after all the operations above are done.
// Your code here 




/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
const exportObj = {
  num1,
  num2,
  num3
};
try {
  exportObj.predictNum1 = predictNum1;
} catch {}
try {
  exportObj.predictNum2 = predictNum2;
} catch {}
try {
  exportObj.predictNum3 = predictNum3;
} catch {}

module.exports = exportObj;

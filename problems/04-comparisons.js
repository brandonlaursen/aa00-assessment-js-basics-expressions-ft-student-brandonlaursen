/*
Comparisons: Use what you have learned about booleans, comparison operators,
and comparison expressions to complete the steps below.

Implement the following steps so that all test specs pass when you run the
following command in your terminal:
npm test test/04-comparisons-spec.js
*/

// 1. Set the isHelloStr1 variable to a comparison expression that evaluates to
//    true only when str1 is strictly equal to a string of 'hello' and false if
//    it is not.
let str1 = 'hello';
let isHelloStr1;



// 2. Create a variable called isHelloStr2 and set it to a comparison expression
//    that evaluates to true if str2 is strictly equal to a string of 'hello'
//    and false if it is not.
let str2 = 'world';
// Your code here 



// 3. Create a variable called isNotHelloStr3 and set it to a comparison
//    expression that evaluates to false if str3 is strictly equal to a string
//    of 'hello' and true if it is not.
let str3 = 'moon';
// Your code here 



// 4. Create a variable called isStrictSameNum and set it to a comparison
//    expression that evaluates to true if num1 is strictly equal to the number
//    10 and false if it is not.
let num1 = 10;
// Your code here 



// 5. Create a variable called isStrictDiffNum and set it to a comparison
//    expression that evaluates to false if num2 is strictly equal to the number
//    7 and true if it is not.
let num2 = 15;
// Your code here 



// 6. Create a variable called isLooselySameNum and set it to a comparison
//    expression that evaluates to true if num3 is loosely equal to a string of
//    '20' and false if it is not.
let num3 = 20;
// Your code here 



// 7. Create a variable called isGreater and set it to a comparison
//    expression that evaluates to true if num4 is greater than 10 and false if
//    it is not.
let num4 = 12;
// Your code here 



// 8. Create a variable called isLess and set it to a comparison
//    expression that evaluates to true if num5 is less than the sum of num6 and
//    the number 4, and false if it is not.
let num5 = 3;
let num6 = 2;
// Your code here 



// 9. Create a variable called isGreaterOrEqual and set it to a comparison
//    expression that evaluates to true if num7 is greater than or equal to the
//    sum of num8 and the number -2, and false if it is not.
let num7 = 9;
let num8 = 11;
// Your code here 



// 10. Create a variable called isInRange and set it to a comparison
//     expression that evaluates to true if num9 falls inside the inclusive
//     range of 8 to 10 and false if it does not.
let num9 = 10;
// Your code here 



// 11. Create a variable called isInExclusiveRange and set it to a comparison
//     expression that evaluates to true if num10 falls inside the exclusive
//     range of 8 to 10 and false if it does not.
let num10 = 9;
// Your code here 



// 12. Create a variable called isOutOfRange and set it to a comparison
//     expression that evaluates to false if num11 falls inside the inclusive
//     range of 50 to 80 and true if it does not.
let num11 = 91;
// Your code here 


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
const exportObj = {
  str1,
  str2,
  str3,
  num1,
  num2,
  num3,
  num4,
  num5,
  num6,
  num7,
  num8,
  num9,
  num10,
  num11,
};
try {
  exportObj.isHelloStr1 = isHelloStr1;
} catch {}
try {
  exportObj.isHelloStr2 = isHelloStr2;
} catch {}
try {
  exportObj.isNotHelloStr3 = isNotHelloStr3;
} catch {}
try {
  exportObj.isStrictSameNum = isStrictSameNum;
} catch {}
try {
  exportObj.isStrictDiffNum = isStrictDiffNum;
} catch {}
try {
  exportObj.isLooselySameNum = isLooselySameNum;
} catch {}
try {
  exportObj.isGreater = isGreater;
} catch {}
try {
  exportObj.isLess = isLess;
} catch {}
try {
  exportObj.isGreaterOrEqual = isGreaterOrEqual;
} catch {}
try {
  exportObj.isInRange = isInRange;
} catch {}
try {
  exportObj.isInExclusiveRange = isInExclusiveRange;
} catch {}
try {
  exportObj.isOutOfRange = isOutOfRange;
} catch {}

module.exports = exportObj;

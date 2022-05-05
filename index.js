//Conditional (ternarny) operator

//true|false
// const isEven = function(number=432){
//   return number%2 === 0;
// }

//---------------//

//'even'|'odd'
// const returnEvenOrOdd = function(number=432){
//   // if(number%2 === 0){
//   //   return 'even';
//   // }
//   // return 'odd';
//   return (number%2 === 0) ? 'even' : 'odd';
// }

//---------------//

// const checkAge = function(age){
//   return (age>18) ? 'adult' : 'not adult';
// }

//---------------//

const summa = 123456;
const LIMIT_SUMMA = 10000;

const sale = summa > LIMIT_SUMMA ? 0.1 : 0.02;

// const classInput = isValid ? 'valid' : 'invalid'

const userNumber = '22' //+prompt('Enter number');

if(isNaN(userNumber)){
  console.log('NAN');
} else if(userNumber % 5 === 0) {
  console.log(userNumber, 'multiply 5');
} else if (userNumber % 3 === 0) {
  console.log(userNumber, 'multiply 3');
} else if (userNumber % 2 === 0) {
  console.log(userNumber, 'multiply 2');
} else {
  console.log(userNumber, 'multiply 1');
}
  
console.log('thanks');

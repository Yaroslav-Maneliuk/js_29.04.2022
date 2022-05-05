//Conditional (ternarny) operator

//true|false
const isEven = function(number=432){
  return number%2 === 0;
}

//'even'|'odd'
const returnEvenOrOdd = function(number=432){
  // if(number%2 === 0){
  //   return 'even';
  // }
  // return 'odd';
  return (number%2 === 0) ? 'even' : 'odd';
}
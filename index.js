const sideSquare = prompt('enter side square' , '10')
/**
 * 
 * @param {number} side 
 * @returns {null | number}
 */
const calcPerimetrSquare = function(side=0){
  if(side<0){
    return null;
  }
  return side*4;
}
console.log(calcPerimetrSquare()) //NaN
console.log(calcPerimetrSquare(sideSquare))  //40
console.log(calcPerimetrSquare(8))  //32


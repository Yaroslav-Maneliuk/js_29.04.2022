/**
 * 
 * @param {x} x 
 * @param {y} y 
 * @param {z} z 
 * @returns {boolean}
 */
const triangleExistenceTest = function (x=3, y=4, z=5){
  return x+y>z && x+z>y && z+y>x;
}
console.log(triangleExistenceTest(1,1,10));


//---------------------------------//


const calcVolumeSfera = function(radius=100, PI=3.14){
  if(radius<=0){
    return NaN;
  }
  return 4*PI*(radius**3)/3;
}
console.log(calcVolumeSfera(23))

//---------------------------------//


const returnFunction = function(){
  const input = prompt('Type something')
  if(input){
    return 'Your input'+input;
  }
  return 'Repeat input';
}
console.log(returnFunction())


//---------------------------------//


// const returnFunction = function(){
//   const input = prompt('Type something')
//   if(input==='' || input===null){
//     return 'Repeat input';
//   }
//   return 'Your input'+input;
// }
// console.log(returnFunction())
  

// /**
//  * 
//  * @param {x} x 
//  * @param {y} y 
//  * @param {z} z 
//  * @returns {boolean}
//  */
// const triangleExistenceTest = function (x=3, y=4, z=5){
//   return x+y>z && x+z>y && z+y>x;
// }
// console.log(triangleExistenceTest(1,1,10));


//---------------------------------//


// const calcVolumeSfera = function(radius=100, PI=3.14){
//   if(radius<=0){
//     return NaN;
//   }
//   return 4*PI*(radius**3)/3;
// }
// console.log(calcVolumeSfera(23))

//---------------------------------//


// const returnFunction = function(){
//   const input = prompt('Type something')
//   if(input){
//     return 'Your input'+input;
//   }
//   return 'Repeat input';
// }
// console.log(returnFunction())


//---------------------------------//


// const returnFunction = function(){
//   const input = prompt('Type something')
//   if(input==='' || input===null){
//     return 'Repeat input';
//   }
//   return 'Your input'+input;
// }
// console.log(returnFunction())
  

//---------------------------------//HW№1
// /**
//  * 
//  * @param {deg1} deg1 
//  * @param {deg2} deg2 
//  * @param {deg3} deg3 
//  * @returns {boolean}
//  */
// const checkingTheTriangleForEquilateral = function(deg1, deg2, deg3){
//   if(deg1===60 && deg2===60 && deg3===60){
//     return true;
//   }
//   return false;
// }
// console.log(checkingTheTriangleForEquilateral(60,60,60));


//---------------------------------//HW№2
// /**
//  * 
//  * @param {deg1} deg1 
//  * @param {deg2} deg2 
//  * @param {deg3} deg3 
//  * @returns {boolean}
//  */
//  const checkingTheTriangleForEquilateral = function(deg1, deg2, deg3){
//   if(deg1===90 || deg2===90 || deg3===90 ){
//     return true;
//   }
//   return false;
// }
// console.log(checkingTheTriangleForEquilateral(90,45,45));


//---------------------------------//HW№3
// /**
//  * 
//  * @param {side1} side1 
//  * @param {side2} side2 
//  * @param {side3} side3 
//  * @returns {boolean}
//  */
//  const checkingTheTriangleForEquilateral = function(side1, side2, side3){
//   if(side1===side2 || side2===side3 || side3===side1 ){
//     return true;
//   }
//   return false;
// }
// console.log(checkingTheTriangleForEquilateral(50,50,45));
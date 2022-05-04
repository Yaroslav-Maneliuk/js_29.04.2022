/**
 * 
 * @param {number} age 
 * @returns {boolean}
 */
const isAdult = function(age=0, ADULT=18){
  return age>=ADULT;
}
const result = isAdult(18, 21);
console.log(result);


// 'use  strict'

// function User(name, sname, age) {
//   this.name = name;
//   this.sname = sname;
//   this.age = age;
//   this.getFullName = function () {
//     return this.name + ' ' + this.sname;
//   };
// };
// const user1 = new User('Dmytro', 'Dmytrov', 20);
// console.log(user1);
// const user2 = new User('Ivan', 'Ivanov', 21);
// console.log(user2);
// const user3 = new User('Denis', 'Denisov', 22);
// console.log(user3);

'use  strict'

function Country(name, population, area) {
  this.name = name;
  this.population = population;
  this.area = area;
  this.getDensity = function () {
    return this.population / this.area;
  };
};
const country1 = new Country('USA', 331893745, 9833520);
console.log(country1);
console.log(country1.getDensity());



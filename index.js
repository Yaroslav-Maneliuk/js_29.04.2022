"use strict";

function Auto(marka = "bmw", maxSpeed = 450) {
  this.name = marka;
  this.maxSpeed = maxSpeed;
  this.speed = 0;

  this.accelerate = function (value = 10) {
    if (value < 0) {
      return this.speed;
    }
    this.speed += value;
    if (this.speed > this.maxSpeed) {
      return (this.speed = this.maxSpeed);
    }
    return this.speed;
  };
  this.decelerate = function (value = 10) {
    if (value < 0) {
      return this.speed;
    }
    this.speed -= value;
    if (this.speed <= 0) {
      return (this.speed = 0);
    }
    return this.speed;
  };
  this.stop = function () {
    return (this.speed = 0);
  };
}

const auto = new Auto();
console.log(auto);
console.log(auto.accelerate(70));
console.log(auto.accelerate(70));
console.log(auto.speed);
console.log(auto.decelerate(20));
console.log(auto.speed);
console.log(auto.stop());
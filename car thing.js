//add (model) year, and method that returns make, model, and year

var car = {
    make: "Toyota",
    model: "Camry",
    year: 1994
};



function newCar(x,y,z) {
  var carSpeed = 50;
  var maxSpeed = 85;
  var minSpeed = 0;
  var randomSpeed = 0;
  return {
    make: x,
    model: y,
    year: z,
    giveUser: function() {
      return "Your make is " + this.make + ".\nYour model is " + this.model + ".\nYour year is " + this.year +  "."
    },
    getSpeed: function() {
      return carSpeed;
    },
    accelerate: function() {
      carSpeed += 10;
      if (carSpeed >= maxSpeed) {
        carSpeed = maxSpeed;
        return "Slow down!";
      };
    },
    brake: function() {
      carSpeed -= 7;
      if (carSpeed <= minSpeed) {
        carSpeed = minSpeed;
        return "Speed up!";
      };
    },
    goTo70: function() {
      while (carSpeed <= 70) {
        carSpeed += 10;
      };
      if (carSpeed >= 70) {
        carSpeed = 70;
      };
      console.log(carSpeed);
    },
    goTo0: function() {
      while (carSpeed >= 0) {
        carSpeed -= 7;
      };
      if (carSpeed <= 0) {
        carSpeed = 0;
      };
      console.log(carSpeed);
    },
    slipperyRoad: function() {
      randomSpeed = Math.floor(Math.random()*(carSpeed + carSpeed)) - carSpeed;
      carSpeed += randomSpeed;
      if (carSpeed === 0) {
        return "Crash Landing!";
      }
      console.log(carSpeed);
    }
  }
};

var car = newCar("asdfasdf","adsfds",0978);

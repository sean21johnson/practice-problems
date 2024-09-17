class Car {
  constructor(make, model, milesPerGallon) {
    this.make = make;
    this.model = model;
    this.milesPerGallon = milesPerGallon
  };

  getMake() {
    return this.make;
  }

  getModel() {
    return this.model;
  }

  getMilesPerGallon() {
    return this.milesPerGallon;
  }
}

const chevy = new Car('Chevy', '96 Edition', 45)

console.log(chevy.getMake())
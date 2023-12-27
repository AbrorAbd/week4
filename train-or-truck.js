// Функции-конструкторы Train и Truck имеют схожие свойства и поведение.
// Перепишите их так, чтобы избавиться от дублирования одинаковых свойств и методов.
function Vehicle(driver) {
  this.driver = driver;
  this.speed = 0;
}
function Train(driver) {
  this.driver = driver;
  this.type = 'passenger'; // 'passenger', 'freight', 'mail'
  this.speed = 0;
  this.drive = function (kmh) {
    this.speed = kmh;
    return `${this.driver} driving at ${kmh} kilometers per hour`;
  };
  this.stop = function () {
    this.speed = 0;
    return `${this.driver} has stopped`;
  };
}

function Truck(driver) {
  this.driver = driver;
  this.speed = 0;
  this.cargo = [];
  this.drive = function (kmh) {
    this.speed = kmh;
    return `${this.driver} driving at ${kmh} kilometers per hour`;
  };
  this.stop = function () {
    this.speed = 0;
    return `${this.driver} has stopped`;
  };
  this.loadCargo = function (cargo) {
    return this;
  };
}

Truck.prototype.unloadCargo = function () {
  return this.cargo;
};
// экспорт Vehicle, Train, Truc в файл с тестами
module.exports = { Vehicle, Train, Truck };

// Функции-конструкторы Train и Truck имеют схожие свойства и поведение.
// Перепишите их так, чтобы избавиться от дублирования одинаковых свойств и методов.

function Vehicle(driver) {
  this.driver = driver;
  this.speed = 0;
}

Vehicle.prototype.drive = function (kmh) {
  this.speed = kmh;
  return `${this.driver} driving at ${kmh} kilometers per hour`;
};

Vehicle.prototype.stop = function () {
  this.speed = 0;
  return `${this.driver} has stopped`;
};

function Train(driver, type) {
  Vehicle.call(this, driver);
  this.type = type || 'passenger'; // 'passenger', 'freight', 'mail'
}

Train.prototype = Object.create(Vehicle.prototype);
Train.prototype.constructor = Train;

function Truck(driver) {
  Vehicle.call(this, driver);
  this.cargo = [];
}

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

Truck.prototype.loadCargo = function (cargo) {
  this.cargo.push(cargo);
  return this;
};

Truck.prototype.unloadCargo = function () {
  return this.cargo;
};


module.exports = { Vehicle, Train, Truck };



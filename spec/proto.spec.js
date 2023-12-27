const { Vehicle, Train, Truck } = require('../train-or-truck');

describe('Vehicle prototype', () => {
  let vehicle;
  beforeEach(() => {
    vehicle = new Vehicle('test');
  });
  test('has a drive method', () => {
    expect(vehicle.drive).toEqual(expect.any(Function));
  });
});

describe('Train', () => {
  describe('prototype constructor', () => {
    test('is Train', () => {
      expect(Train.prototype.constructor).toEqual(Train);
    });
  });

  describe('.drive()', () => {
    let train;
    let vehicle;
    beforeEach(() => {
      train = new Train('test');
      vehicle = new Vehicle('test');
    });

    test('is the same function as Vehicle.prototype.drive', () => {
      expect(train.drive()).toBe(vehicle.drive());
    });
  });
});

describe('Truck', () => {
  describe('prototype constructor', () => {
    test('is Truck', () => {
      expect(Truck.prototype.constructor).toEqual(Truck);
    });
  });

  describe('.drive()', () => {
    let truck;
    let vehicle;
    beforeEach(() => {
      truck = new Truck('test');
      vehicle = new Vehicle('test');
    });

    test('is the same function as Vehicle.prototype.drive', () => {
      expect(truck.drive()).toBe(vehicle.drive());
    });
  });

  describe('.loadCargo()', () => {
    let truck;
    beforeEach(() => {
      truck = new Truck('test');
    });

    test('is on the prototype', () => {
      expect(Truck.prototype.loadCargo).toEqual(expect.any(Function));
      expect(truck.loadCargo).toBe(Truck.prototype.loadCargo);
    });
  });

  describe('.unloadCargo()', () => {
    let truck;
    beforeEach(() => {
      truck = new Truck('test');
    });

    test('is on the prototype', () => {
      expect(Truck.prototype.unloadCargo).toEqual(expect.any(Function));
      expect(truck.unloadCargo).toBe(Truck.prototype.unloadCargo);
    });
  });
});

// Behavioral specs.
const { Vehicle, Train, Truck } = require('../train-or-truck');

describe('Vehicle', () => {
  describe('the constructor', () => {
    it('is a function', () => {
      expect(Vehicle).toEqual(expect.any(Function));
    });

    describe('when called', () => {
      let vehicle;
      beforeEach(() => {
        vehicle = new Vehicle('Polly');
      });

      test('sets the driver', () => {
        expect(vehicle.driver).toEqual('Polly');
      });

      test('sets the initial speed', () => {
        expect(vehicle.speed).toEqual(0);
      });
    });
  });

  describe('.drive()', () => {
    let vehicle;

    beforeEach(() => {
      vehicle = new Vehicle('Polly');
    });

    test('exists', () => {
      expect(vehicle.drive).toEqual(expect.any(Function));
    });

    test('drives', () => {
      expect(vehicle.drive(20)).toEqual(
        'Polly driving at 20 kilometers per hour'
      );
    });

    test('sets the speed', () => {
      vehicle.drive(45);
      expect(vehicle.speed).toEqual(45);
    });
  });

  describe('.stop()', () => {
    let vehicle;

    beforeEach(() => {
      vehicle = new Vehicle('Polly');
      vehicle.drive(100);
    });

    test('exists', () => {
      expect(vehicle.stop).toEqual(expect.any(Function));
    });

    test('stops', () => {
      expect(vehicle.stop()).toEqual('Polly has stopped');
      expect(vehicle.speed).toEqual(0);
    });
  });
});

describe('Train', () => {
  describe('the constructor', () => {
    test('is a function', () => {
      expect(Train).toEqual(expect.any(Function));
    });

    describe('when called', () => {
      let train;
      beforeEach(() => {
        train = new Train('Polly');
      });

      test('sets the driver', () => {
        expect(train.driver).toEqual('Polly');
      });

      test('sets the initial speed', () => {
        expect(train.speed).toEqual(0);
      });
    });
  });

  describe('.drive()', () => {
    let train;
    beforeEach(() => {
      train = new Train('Polly');
    });

    test('exists', () => {
      expect(train.drive).toEqual(expect.any(Function));
    });

    test('drives', () => {
      expect(train.drive(20)).toEqual(
        'Polly driving at 20 kilometers per hour'
      );
    });

    test('sets the speed', () => {
      train.drive(45);
      expect(train.speed).toEqual(45);
    });
  });

  describe('.stop()', () => {
    let train;

    beforeEach(() => {
      train = new Train('Polly');
      train.drive(100);
    });

    test('exists', () => {
      expect(train.stop).toEqual(expect.any(Function));
    });

    test('stops', () => {
      expect(train.stop()).toEqual('Polly has stopped');
      expect(train.speed).toEqual(0);
    });
  });
});

describe('Truck', () => {
  describe('the constructor', () => {
    test('is a function', () => {
      expect(Truck).toEqual(expect.any(Function));
    });

    describe('when called', () => {
      let truck;
      beforeEach(() => {
        truck = new Truck('Polly');
      });

      test('sets the driver', () => {
        expect(truck.driver).toEqual('Polly');
      });

      test('sets the initial speed', () => {
        expect(truck.speed).toEqual(0);
      });

      test('sets the initial cargo load', () => {
        expect(truck.cargo).toEqual([]);
      });
    });
  });

  describe('.drive()', () => {
    let truck;

    beforeEach(() => {
      truck = new Truck('Polly');
    });

    test('exists', () => {
      expect(truck.drive).toEqual(expect.any(Function));
    });

    test('drives', () => {
      expect(truck.drive(20)).toEqual(
        'Polly driving at 20 kilometers per hour'
      );
    });

    test('sets the speed', () => {
      truck.drive(45);
      expect(truck.speed).toEqual(45);
    });
  });

  describe('.stop()', () => {
    let truck;

    beforeEach(() => {
      truck = new Truck('Polly');
      truck.drive(100);
    });

    test('exists', () => {
      expect(truck.stop).toEqual(expect.any(Function));
    });

    test('stops', () => {
      expect(truck.stop()).toEqual('Polly has stopped');
      expect(truck.speed).toEqual(0);
    });
  });

  describe('.loadCargo()', () => {
    let truck;

    beforeEach(() => {
      truck = new Truck('Polly');
      truck.loadCargo('test cargo');
    });

    test('adds the cargo on the truck', () => {
      expect(truck.cargo).toEqual(['test cargo']);
    });

    test('returns itself', () => {
      expect(truck.loadCargo('test')).toEqual(truck.cargo);
    });
  });

  describe('.unloadCargo()', () => {
    let truck;
    let unloadedCargo;
    beforeEach(() => {
      truck = new Truck('Polly');
      truck.cargo = ['cargo 1', 'cargo 2', 'cargo 3', 'cargo 4'];
      unloadedCargo = truck.unloadCargo();
    });

    test('returns the latest cargo', () => {
      expect(unloadedCargo).toEqual('cargo 4');
    });

    test('reduces the cargo load by 1', () => {
      expect(truck.cargo.length).toEqual(3);
    });
  });
});

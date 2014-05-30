(function (app) {
    // Vehicle (base class)
    var vehicle = function (type) {
        this.type = type;
    };

    vehicle.prototype.drive = function () {
        return "Vroooom!";
    };

    app.Vehicle = vehicle;

    // Car
    var car = function () {
        app.Vehicle.call(this, "car");
    };

    car.prototype = new app.Vehicle(); //eww

    car.prototype.drive = function () {
        return "Nyeeeeeow!";
    }

    app.Car = car;

    // Truck
    var truck = function () {
        app.Vehicle.call(this, "truck");
    }

    truck.prototype = new app.Vehicle();

    truck.prototype.drive = function () {
        return app.Vehicle.prototype.drive.apply(this, []);
    }

    app.Truck = truck;

    // Scooter
    var scooter = function () {
        app.Vehicle.call(this, "scooter");
    }

    scooter.prototype = new app.Vehicle();

    scooter.prototype.drive = function () {
        return "Meep. Meep.";
    }

    app.Scooter = scooter;

})(window.app = window.app || {});
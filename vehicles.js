(function (app) {
    // Vehicle
    var vehicle = function () {

    };

    vehicle.prototype.drive = function () {
        return "vroooom!";
    };

    app.Vehicle = vehicle;

    // Car
    var car = function (passengers) {
        app.Vehicle.call(this);
    };

    car.prototype = new app.Vehicle(); //eww

    car.prototype.drive = function () {
        var baseDrive = app.Vehicle.prototype.drive.apply(this, []);
        return "Cars go " + baseDrive;
    }

    app.Car = car;

    // Truck
    var truck = function () {
        app.Vehicle.call(this);
    }

    truck.prototype = new app.Vehicle();

    truck.prototype.drive = function () {
        var baseDrive = app.Vehicle.prototype.drive.apply(this, []);
        return "Trucks go " + baseDrive;
    }

    app.Truck = truck;

})(window.app = window.app || {});
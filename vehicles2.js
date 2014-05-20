class Vehicle {
    constructor() {
    }

    drive()
    {
        return "vroom!";
    }
}

class Car extends Vehicle
{
    constructor() {
        super();
    }

    drive() {
        var base = super();

        return "Cars go " + base;
    }
}

var car = new Car();
alert(car.drive());
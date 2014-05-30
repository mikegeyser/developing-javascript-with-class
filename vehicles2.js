class Vehicle {
    constructor() {
    }

    drive()
    {
        return "vroooom!";
    }
}

class Car extends Vehicle
{
    constructor() {
        super();
    }

    drive() {
        return "Cars go " + super();
    }
}

class Truck extends Vehicle
{
    constructor()
    {
        super();
    }

    drive()
    {
        return "Trucks go " + super();
    }
}

export { Car, Truck }
class Vehicle
{
    constructor(type)
    {
        this.type = type;
    }

    drive()
    {
        return "Vroooom!";
    }
}

class Car extends Vehicle
{
    constructor()
    {
        super("car");
    }

    drive()
    {
        return "Nyeeeeeow!";
    }
}

class Truck extends Vehicle
{
    constructor()
    {
        super("truck");
    }

    drive()
    {
        return super();
    }
}

class Scooter extends Vehicle
{
    constructor()
    {
        super("scooter");
    }

    drive()
    {
        return "Meep. Meep.";
    }
}

export { Car, Truck, Scooter }
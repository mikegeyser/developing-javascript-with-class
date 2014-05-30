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
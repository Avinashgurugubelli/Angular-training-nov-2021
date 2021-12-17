/**
 * 
 * Object:
 * ******
 *  - An object is an instance of a class. All proprties and methods of the class can be accessed with the help of objects. 
 *  - When a class is defined, no memory is allocated but when it is instantiated (i.e. an object is created), memory is allocated
 * 
 * Class:
 * ******
 * - Class is a blue print or building block that leads to Object-Oriented Programming.
 * - It holds its own own proeprties and methods, which can be accessed and used by creating an instance of that class.
 * - Objects with similar properties and methods are grouped together to form a Class.
 * 
 * For Example-1:
 * --------------
 * 
 *  - Consider the Class of Account. There may be many accounts with different names and types but all of them will share some common properties,
 *    as all of them will have some common attributes like balance, account holder name, etc.
 *  - So here, Account is the class, and the balance, the account holder’s name is their property
 * 
 * Example 2:
 * ----------
 * 
 * An architect will have the blueprints for a house....those blueprints will be plans that explain exactly what properties the house will have and how they are all layed out.  
 * However it is just the blueprint, you can't live in it.  Builders will look at the blueprints and use those blueprints to make a physical house.  
 * They can use the same blueprint to make as many houses as they want....each house will have the same layout and properties.  
 * Each house can accommodate it's own families...so one house might have the Smiths live in it, one house might have the Jones live in it.
 *        `The blueprint is the class...the house is the object.  The people living in the house are data stored in the object's properties.`
 * 
 * Example 3:
 * ----------
 * 
 * For example consider we have a Class of Cars under which Santro Xing, Alto and WaganR represents individual Objects.
 * In this context each Car Object will have its own, Model,Year of Manufacture, Colour, Top Speed, Engine Power etc.,which form Properties of the Car class and the associated actions 
 * i.e., object functions like Start, Move, Stop form the Methods of Car Class.No memory is allocated when a class is created. Memory is
 * allocated only when an object is created, i.e., when an instance of a class is created.
 * 
 * Access specifiers:
 * *****************
 * - Private: The access level of a private modifier is only within the class. It cannot be accessed from outside the class.
 * - Public: The access level of a public modifier is everywhere. It can be accessed from within the class, outside the class, within the package and outside the package.
 * - Protected: The access level of a protected modifier is within the package and outside the package through child class. If you do not make the child class, it cannot be accessed from outside the package.
 * 
 * Syntax:
 * -------
 * class <ClassName> {}
 * Here -> class -> is a keyWord
 * 
 * Getter: access the private property
 * Setter: Setting the value of the private property.
 */

class Car {
    private availableColors: string[] = ['blue', 'white', 'red', 'gray'];
    // properties
    private year: number;
    public model: string;
    private _color: string;
    private _topSpeed: number;
    private _enginePower: number;

    /**
     * get -> a keyword
     * Getter for top speed
     */
    public get topSpeed() {
        return this._topSpeed;
    }

    /**
     * Getter for color property
     */
    public get color() {
        return this._color;
    }

    /**
     * Setter for color
     */
    public set color(value: string) {
        if (this.availableColors.includes(value)) {
            this._color = value;
        }
        else {
            console.log(`color: ${value} is not accepted`);
        }
    }

    /**
     * constructor:
     * A constructor is a special type of function/ method, 
     * which accepts the arguments that are used to set the properties of a class
     * Here constructor -> is a key word
     */
    constructor(year: number, model: string, color: string, topSpeed: number, enginePower: number) {
        // To access the properties inside a class we use this.
        this.year = year;
        this.model = model;
        this._color = color;
        this._topSpeed = topSpeed;
        this._enginePower = enginePower;
    }

    // Methods
    public print() {
        console.log(`
        year: ${this.year}, 
        model: ${this.model},
        color: ${this._color},
        topSpeed: ${this._topSpeed},
        enginerPower: ${this._enginePower},
        `);
    }

}

/**
 * Class object creation:
 * syntax:
 * let/const varibaleName = new ClassName();
 * Here - new -> is a key word
 */
const waganor = new Car(2020, 'Waganor', 'Red', 100, 1200);
const shiftDesire = new Car(2019, 'Shift desire', 'white', 140, 1800);

// calling a method of a class
waganor.print();

// for getter there is no need of () at the end
console.log(waganor.topSpeed);

waganor.color = 'Green';

waganor.print();
shiftDesire.print();


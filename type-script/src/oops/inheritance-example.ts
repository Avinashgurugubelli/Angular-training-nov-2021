
import { Address } from "../models/address";
import { Idproof } from "../models/Idproof";

/**
 * Inheritance:
 * Deriving a new class from the existing class.
 * 
 * Parent class or base class - (example: Person)
 * 
 * Derived class -> we call it as a sub class / child class (example, Employee, Customer)
 * 
 */

export class Human {
    public hands: string[];
    public color: string;
    public eyes: string[];
}
export class Person {
    public firstName: string;
    public lastName: string;
    public dob: string;
    public address: Address;
    protected idProofs: Idproof;

    constructor(firstName: string, lastName: string, dob: string, address: Address, idproofs?: Idproof) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.address = address;
        this.idProofs = idproofs;
    }
}

class Employee extends Person {
    public employeeID: string;
    public salary: number;
    public experience: number;

    constructor(employeeID: string, firstName: string, lastName: string, dob: string,
        address: Address, idproofs: Idproof, salary: number, experience: number) {
        //  Calling a parent class constructor
        super(firstName, lastName, dob, address, idproofs);
        this.employeeID = employeeID;
        this.salary = salary;
        this.experience = experience;
    }
    public get ids() {
        return this.idProofs
    }
}

class Customer extends Person {
    public customerId: string;
    public orders: string[];
}


// Create employee object
const address1: Address = {
    doorNumber: '1-236-895',
    streetName: 'Bankers Bay',
    pincode: 256259,
    state: 'Maharastra',
    country: 'India',
};
const emp = new Employee('emp-1', 'jack', 'doe', '19-07-1990', address1, {
    aadharNumber: 12245453,
    dirvingLicenecNumber: 'dfssfs'
}, 50000, 5);

console.log(emp.firstName);
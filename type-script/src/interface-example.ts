import { Address } from './models/address';
import { Person } from './models/person';

const address1: Address = {
    doorNumber: '1-236-895',
    streetName: 'Bankers Bay',
    pincode: 256259,
    state: 'Maharastra',
    country: 'India',
};

let person: Person = {
    firstName: 'Jack',
    lastName: 'Doe',
    phoneNumber: '12345669',
    age: 20,
    address: address1
};

let cars = {
    model: 'ABC',
    make: 'Honda',
    year: 2021
};

function printPersonDetails(input: any) {
    console.log(input);
}

printPersonDetails(person);
printPersonDetails(cars);
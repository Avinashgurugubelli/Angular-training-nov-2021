/**
 * Interface: In typescript Inteface can be used as a custom data type.
 * 
 * Syntax:
 * interface <Name_of_interface> {}
 */
import { Address } from './address';
import { Idproof } from './Idproof';

export interface Person {
    // Properties
    firstName: string;
    lastName: string;
    age: number;
    phoneNumber: string;
    address: Address;
    // Optional property (?)
    idProofs?: Idproof;
}
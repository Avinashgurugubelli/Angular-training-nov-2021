// imports
import { Address } from "./models/address";
import { Idproof } from "./models/Idproof";
import { Person } from "./oops/inheritance-example";

/**
 * export -> it is a key word to reuse it other file
 * class -> key word to define a new class
 * 
 * syntax:
 * 
 * class <ClassName>
 */

enum ValidKycIds {
    AAdhar = 'AAdhar',
    DrivingLicence = 'DrivingLicence',
    VoterId = 'VoterId',
    Passport = 'Passport',
    RationCard = 'RationCard'
}

enum ValidAccountTypes {
    Savings = 'Savings',
    CarLoan = 'CarLoan',
    GoldLoan = 'GoldLoan',
    HomeLoan = 'HomeLoan',
    AgriLoan = 'AgriLoan'
}

interface KycDetails {
    idType: ValidKycIds;
    idNumber: string | number;
    issuedBy: string;
}

class Customer extends Person {
    private _kycDetails: KycDetails;


    constructor(firstName: string, lastName: string, dob: string, address: Address, kycDetails?: KycDetails) {
        super(firstName, lastName, dob, address);
        this._kycDetails = kycDetails;
    }

    // method with parameters and return type
    public addKycDetails(kycDetails?: KycDetails): string {
        if (!kycDetails) {
            return 'Failed to add Kyc Details';
        }
        else {
            this._kycDetails = kycDetails;
            return 'Kyc Details added successfully!';
        }
    }

    // Getter -> readonly access to the private property
    public get kycDetails(): KycDetails {
        return this._kycDetails;
    }
}

export class Account {
    /**
     * Properties/ fields/ attributes
     * 
     * syntax:
     * accessSpecifier nameOfAProperty: dataType
     * 
     * access specifiers:
     * public -> it can be accessable from anywhere
     * private -> can be accessable only with in the class
     * protected -> it can be accessable with in it's own class and it's child class
     */
    private accountNumber: number;
    public accountType: ValidAccountTypes;
    private _brachName: string;
    private _balance: number;

    /**
     * Methods:
     * 
     * constructor: is a special method which invokes automatically when the obj of a class is created.
     * 
     * Syntax:
     * AccessSpecifier MethodName(params....): retutnType {}
     */
    constructor(accountNumber: number, accountType: ValidAccountTypes) {
        this.accountNumber = accountNumber;
        this.accountType = accountType;
    }

    // Custom methods
    public printDetails(): void {
        console.log(`account details: accountNumber - ${this.accountNumber}, accountName - ${this.accountType}`);
    }

    // Getter
    public get brachName(): string {
        return this._brachName;
    }

    // Setter
    public set brachName(dob: string) {
        this._brachName = dob;
    }


    // Getter
    public get blance(): number {
        return this._balance;
    }

    // Setter
    public set blance(blance: number) {
        this._balance = blance;
    }

}


/**
 * Assosication relationship: An obj of class B is passed as argument to a method of class A
 */
 class Atm {
    public showBalance(account: Account): void {
        console.log(`Current balance in account: ${account.blance}`);
    }
}

// Creating an object
const account = new Account(123365489, ValidAccountTypes.Savings);
account.blance = 50000;
account.printDetails();

const customer = new Customer('Maraco', 'Jessy', '19-07-1995', {
    country: 'USA',
    doorNumber: '19/08',
    pincode: 114456,
    state: 'New york',
    streetName: 'Bankers street'
});
const kycStatus = customer.addKycDetails({
    idNumber: 123345478,
    idType: ValidKycIds.AAdhar,
    issuedBy: 'Govt of India'
});
console.log(kycStatus);

// Create an obj to class ATM
const atm = new Atm();
atm.showBalance(account);
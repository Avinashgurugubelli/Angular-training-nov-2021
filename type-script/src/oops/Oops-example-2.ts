/**
 * Assositation:
 * 
 * - An object of class B is passed as a argumnet to a method of class A
 * Here example: Object of account (acc1) is passed as a argument to a method (showBalance) of class ATM;
 * 
 * - An object of class B is used as a local variable in a method of class A
 * example: const account: Account = new Account(44555, 55666); in show balanceMethod
 */

export class Account {
    private balance: number;
    private _accountNumber: number;

    get accountNumber(): number {
        return this._accountNumber;
    }

    get showBalance() {
        return this.balance;
    }

    constructor (accountNumber: number, balance: number) {
        this._accountNumber = accountNumber;
        this.balance = balance;
    }
}

export class ATM {

    public abc(name: string) {
        console.log(`ABC called, Name: ${name}`);
    }

    // Assositation -> using the object of an account
    public showBalance(account: Account) {
        console.log(`Account Balance: ${account.showBalance}`)
    }
}

// Creating object to account class
const acc1: Account = new Account(1145566, 5000);
const acc2: Account = new Account(1145566, 5000);
// Creating Obj to Atm class
const atm = new ATM();
atm.abc("Lakshmi");

// Show balance of a given account
atm.showBalance(acc2);
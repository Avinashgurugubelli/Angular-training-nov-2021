import { AvialblePaymentGateways, IpaymentGateway, PaymentGatewayFactory } from "./intrenal/payment-gateway";

const p: IpaymentGateway = new PaymentGatewayFactory(AvialblePaymentGateways.Visa).instance;
p.createPayment();
p.statement();

abstract class BaseClass {

    print(msg: string) {
        console.log(`Message: ${msg}`);
    }

    abstract callPrint();
}

class childClass extends BaseClass {
    callPrint() {
        throw new Error("Method not implemented.");
    }

}

abstract class Employee {
    public name: string;
    public employeeId: string;
    abstract calculateSalary();
}

class PerminatEmployee extends Employee {
    public MonthlySalary: number;
    public bonous: number;

    constructor(MonthlySalary: number, bonous: number) {
        super();
        this.MonthlySalary = MonthlySalary;
        this.bonous = bonous;
    }

    calculateSalary() {
        return this.bonous + this.MonthlySalary;
    }

}

class PartTimeEmployee extends Employee {

    public payForHour: number;
    public noOfWorkingHours: number;

    constructor(payForHour: number, noOfWorkingHours: number) {
        super();
        this.payForHour = payForHour;
        this.noOfWorkingHours = noOfWorkingHours;
    }

    calculateSalary() {
        return this.payForHour * this.noOfWorkingHours;
    }
}
// Can not create an object to abstract class
// const e = new Employee();

const partTimeEmployee: Employee = new PartTimeEmployee(30, 5000);
partTimeEmployee.calculateSalary();

const perminantEmp: Employee = new PerminatEmployee(50000, 10000);
perminantEmp.calculateSalary();




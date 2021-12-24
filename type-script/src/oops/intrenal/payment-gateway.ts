/**
 * intraface:
 * 
 * synatx: interface(Keyword) InterfaceName {
 * }
 */ 
 export interface IpaymentGateway {
    /**
     * createPayment
     */
    createPayment(): void;
    statement(): any;
}



export enum AvialblePaymentGateways {
    Visa = 'Visa',
    PayPal = 'PayPal'
}
/**
 * Implementing the Interface ->
 * 
 * syntax: ClassName implements(Key word) InterfaceName
 * 
 * Note: When every you are implementing the interface you have to implement all the methods in the interface.
 */
 class Visa implements IpaymentGateway {

    createPayment(): void {
        console.log("Payment for an order created");
    }

    statement() {
        console.log("Showing the transaction statement");
    }
}

class PayPal implements IpaymentGateway {

    createPayment(): void {
        console.log("Payment for an order created");
    }

    statement() {
        console.log("Showing the transaction statement");
    }
}

export class PaymentGatewayFactory {
    // property
    private _instance: IpaymentGateway;

    constructor(gateWayType: AvialblePaymentGateways) {
        if(gateWayType === AvialblePaymentGateways.PayPal) {
            this._instance = new PayPal();
        }
        if(gateWayType === AvialblePaymentGateways.Visa) {
            this._instance = new Visa();
        }
        
    }

    get instance(): IpaymentGateway {
        return this._instance;
    }
}
export interface DynamicKey {
    [key: string]: any;
}
export interface Employee {
    firstName: string;
    lastName: string;
    emailId: string;
    id: number;
    salary: number;
    workExp: DynamicKey;
    gender: string;
}
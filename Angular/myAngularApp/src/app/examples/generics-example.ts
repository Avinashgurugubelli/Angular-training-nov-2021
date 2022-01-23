export interface Person<T> {
    id: number;
    data: T;
}

export interface Student extends Person<StudentData> {
}

export interface Employee extends Person<EmployeeData> {
}

export interface EmployeeData {
    name: string;
    age: number;
    dob: string;
}

export interface StudentData {
    name: string;
    age: number;
    dob: string;
    marks: any[]
}


// const s: Student = {
//     data: {

//     }
// }

// const p : Employee = {
//     data: {

//     }
// }
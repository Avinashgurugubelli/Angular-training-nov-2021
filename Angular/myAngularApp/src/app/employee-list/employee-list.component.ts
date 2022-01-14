import { Employee } from './../model/employee';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'employee-list',
    templateUrl: 'employee-list.component.html',
    styleUrls: ['employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
    public showData: boolean = true;
    public employeesToShow: Employee[] = [];

    get isEqual() {
        return true;
    }

    public employees: Employee[] = [];

    public getAllEmployeesCount(): number {
        return this.employees.length;
    }

    public getMaleEmployeesCount(): number {
        return this.employees.filter((employee: Employee) => employee.gender.toLowerCase() === 'male').length
    }

    public getFemaleEmployeesCount(): number {
        return this.employees.filter((employee: Employee) => employee.gender.toLowerCase() === 'female').length
    }

    public filterEmployees(value: string) {
        if (value.toLowerCase() === 'male' || value.toLowerCase() === 'female') {
            this.employeesToShow = this.employees.filter((e: Employee) => e.gender.toLowerCase() === value);
        }
        else {
            this.employeesToShow = this.employees;
        }
    }


    public loadData(): void {
        // this.showData = true;
        this.employees = [{
            id: 1,
            firstName: 'Jack',
            lastName: 'Doe',
            emailId: 'jack@email.com',
            salary: 10000,
            gender: 'male',
            workExp: {
                "JS": 4.5,
                "DontNet": 5,
                "Angular": 10
            }
        },
        {
            id: 2,
            firstName: 'Jhon',
            lastName: 'Doe',
            emailId: 'Jhon@email.com',
            salary: 20000,
            gender: 'male',
            workExp: {
                "JS": 4.5,
                "DontNet": 6,
                "Angular": 10
            }
        },
        {
            id: 3,
            firstName: 'Jim',
            lastName: 'Deppe',
            emailId: 'Jim@email.com',
            salary: 30000,
            gender: 'female',
            workExp: {
                "JS": 4.5,
                "DontNet": 10,
                "Angular": 15
            }
        },
        {
            id: 4,
            firstName: 'Jessy',
            lastName: 'Don',
            emailId: 'Jessy@email.com',
            salary: 40000,
            gender: 'female',
            workExp: {
                "JS": 4.5,
                "DontNet": 5,
                "Angular": 10
            }
        },
        {
            id: 5,
            firstName: 'Martin',
            lastName: 'LK',
            emailId: 'Martin@email.com',
            salary: 500000,
            gender: 'male',
            workExp: {
                "JS": 4.5,
                "DontNet": 15,
                "Angular": 7
            }
        },
        {
            id: 6,
            firstName: 'Max',
            lastName: 'kollar',
            emailId: 'Max@email.com',
            salary: 60000,
            gender: 'male',
            workExp: {
                "JS": 8,
                "DontNet": 5,
                "Angular": 10
            }
        }]
    }

    constructor() {
    }

    ngOnInit() {
        this.loadData();
        this.employeesToShow = this.employees;
    }
}
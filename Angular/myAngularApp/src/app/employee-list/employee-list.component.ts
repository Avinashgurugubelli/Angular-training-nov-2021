import { Employee } from './../model/employee';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'employee-list',
    templateUrl: 'employee-list.component.html',
    styleUrls: ['employee-list.component.scss']
})

export class EmployeeListComponent implements OnInit {
    public showData: boolean = true;

    get isEqual() {
        return true;
    }

    public employees: Employee[] = [];

    public loadData(): void {
        // this.showData = true;
        this.employees = [{
            id: 1,
            firstName: 'Jack',
            lastName: 'Doe',
            emailId: 'jack@email.com'
        },
        {
            id: 2,
            firstName: 'Jhon',
            lastName: 'Doe',
            emailId: 'Jhon@email.com'
        },
        {
            id: 3,
            firstName: 'Jim',
            lastName: 'Deppe',
            emailId: 'Jim@email.com'
        },
        {
            id: 4,
            firstName: 'Ricky',
            lastName: 'Don',
            emailId: 'Ricky@email.com'
        },
        {
            id: 5,
            firstName: 'Martin',
            lastName: 'LK',
            emailId: 'Martin@email.com'
        },
        {
            id: 6,
            firstName: 'Max',
            lastName: 'kollar',
            emailId: 'Max@email.com'
        }]
    }

    constructor() {
    }

    ngOnInit() { }
}
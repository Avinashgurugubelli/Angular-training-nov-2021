import { EmployeeService } from './../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';

@Component({
    selector: 'employee-table',
    templateUrl: 'employees-table.component.html'
})

export class EmployeeTableComponent implements OnInit {
    public employeesToShow: Employee[] = [];

    public employees: Employee[] = [];
    
    // Here the instance of the employeeService will be provided by angular Dependency injection
    // So you no need to create an object to EmployeeService manually
    constructor(private employeeService: EmployeeService) { }

    public getAllEmployeesCount(): number {
        // Calling the employee service public method
        return this.employeeService.getAllEmployeesCount();
    }

    public getMaleEmployeesCount(): number {
         // Calling the employee service public method
        return this.employeeService.getMaleEmployeesCount();
    }

    public getFemaleEmployeesCount(): number {
         // Calling the employee service public method
        return this.employeeService.getFemaleEmployeesCount();
    }

    public filterEmployees(value: string) {
        // Calling the employee service public method
        this.employeesToShow = this.employeeService.filterEmployees(value);
    }


    public loadData(): void {
        // Accessing the getter from the employee service class
        this.employees = this.employeeService.employees;
    }

    ngOnInit() {
        this.loadData();
        this.employeesToShow = this.employees;
    }

    public onChoose(value: any) {
        this.filterEmployees(value);
    }
}
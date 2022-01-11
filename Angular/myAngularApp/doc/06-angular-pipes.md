## Angular Pipes
- Official Doc reference: https://angular.io/guide/pipes
- Pipes helps to transform data before display and can manage data within interpolation, denoted by {{ | }}. It accepts data, arrays, integers and strings as inputs which are separated by ‘|’ symbol.
- Built in pipes include lowercase, uppercase, decimal, date, percent, currency etc.
  - `DatePipe:` Formats a date value according to locale rules.
  - `UpperCasePipe:` Transforms text to all upper case.
  - `LowerCasePipe:` Transforms text to all lower case.
  - `CurrencyPipe:` Transforms a number to a currency string, formatted according to locale rules.
  - `DecimalPipe:` Transforms a number into a string with a decimal point, formatted according to locale rules.
  - `PercentPipe:` Transforms a number to a percentage string, formatted according to locale rules.

### Using a pipe in a template:
- To apply a pipe, use the pipe operator (|) within a template expression as shown in the following code example, along with the name of the pipe, which is date for the built-in DatePipe. The tabs in the example show the following:
  - `app.component.html` uses date in a separate template to display a birthday.
    ```
     <p>The hero's birthday is {{ birthday | date }}</p>
    ```
  - `hero-birthday1.component.ts` uses the same pipe as part of an in-line template in a component that also sets the birthday value.
    ```
    import { Component } from '@angular/core';  
    @Component({
      selector: 'app-hero-birthday',
      template: `<p>The hero's birthday is {{ birthday | date }}    </p>`
    })
    export class HeroBirthdayComponent {
        birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based
    }
    ```

### Creating custom Pipe:
- Depending on the gender of the employee, we want to display Mr. or Miss. prefixed to the employee name
- `Step 1 :` To achieve this let's create a custom pipe called employeeTitlePipe. Right click on the "employee" folder and add a new TypeScript file. Name it "employeeTitle.pipe.ts". Copy and paste the following code.
  ```
    import { Pipe, PipeTransform } from '@angular/core';

    @Pipe({
        name: 'employeeTitle'
    })
    export class EmployeeTitlePipe implements PipeTransform {
        transform(value: string, gender: string): string {
            if (gender.toLowerCase() == "male")
                return "Mr." + value;
            else
                return "Miss." + value;
        }
    }
  ```
- Code explanation:
  - Import Pipe decorator and PipeTransform interface from Angular core.
  - Notice "EmployeeTitlePipe" class is decorated with Pipe decorator to make it an Angular pipe.
  - name property of the pipe decorator is set to employeeTitle. This name can then be used on any HTML page where you want this pipe functionality.
  - EmployeeTitlePipe class implements the PipeTransform interface. This interface has one method transform() which needs to be implemented.
  - Notice the transform method has 2 parameters. value parameter will receive the name of the employee and gender parameter receives the gender of the employee. The method returns a string i.e Mr. or Miss. prefixed to the name of the employee depending on their gender.
- `Step 2 :` Register "EmployeeTitlePipe" in the angular module where we need it. In our case we need it in the root module. So in app.module.ts file, import the EmployeeTitlePipe and include it in the "declarations" array of NgModule decorator.
```
    import { EmployeeTitlePipe } from './employee/employeeTitle.pipe'

    @NgModule({
        imports: [BrowserModule],
        declarations: [AppComponent, EmployeeComponent,
                       EmployeeListComponent, EmployeeTitlePipe],
        bootstrap: [AppComponent]
    })

    export class AppModule { }
```
- `Step 3 :` In "employeeList.component.html" use the "EmployeeTitlePipe" as shown below. Notice we are passing employee gender as an argument for the gender parameter of our custom pipe. Employee name gets passed automatically.
  
    ```{{employee.name | employeeTitle:employee.gender}}```
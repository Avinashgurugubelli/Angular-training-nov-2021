### What is a container and nested component :

In the example below, we have 2 components

- One of the component displays the list of employees. We named this component EmployeeTableComponent.

- The other component displays the buttons and the count of employees. We will call this component EmployeeFilterComponent.

- We will nest EmployeeFilterComponent in EmployeeFilterComponent. So EmployeeFilterComponent becomes the nested component or child component and EmployeeTableComponent becomes the container component or parent component.

- Employee Table component: refer: `src\app\nested-components\employees-table\employees-table.component.ts`
- Employee Filter component: refer: ``src\app\nested-components\employees-filter\employees-filter.component.ts``

- we Converted a component property to an input property using @Input decorator : 
  - To be able to pass the values for these 3 properties from the container component to the nested component we need to decorate the properties with @Input() decorator. 
  - Decorating a property with @Input() decorator makes the property an input property. 
  - we will be passing the values from the parent component i.e EmployeeTableComponent. 
  - To be able to use the @Input() decorator we will have to first import it from @angular/core.

### Passing data from the parent component to the child component : 
  - There are 2 modifications that we need to do in EmployeeTableComponent to be able to pass values from the parent component i.e EmployeeTableComponent to the child component i.e EmployeeFilterComponent. 
  - The first change is in EmployeeTableComponent TypeScript file as shown below. Notice I have introduced 3 methods that return male employees count, female employees count and total employees count.
  - The second change is in the view template of EmployeeTableComponent i.e employee-table.component.html file. Notice with in <employee-filter> directive we are using property binding to bind the properties (allEmployeeCount, maleEmployeeCount, femaleEmployeeCount) of the nested component (EmployeeFilterComponent) with the 3 methods in the container component (EmployeeTableComponent).
  
### Passing data from child component to parent component:
  - To achieve this we are going to make use of component output properties. First let's look at the changes required in the nested component i.e EmployeeFilterComponent.
  ```
    /**
     * The Output decorator makes the property an Output property
     * EventEmitter class is used to create the custom event When the button clicked,
     * the selected button value which is a string gets passed to the event handler method. Hence, the event payload is string.
     */
    @Output() public choice: EventEmitter<String> = new EventEmitter();
  ```
  - The following are the changes required in the view template of EmployeeFilterComponent i.e employee-filter.component.html. Notice the click event
    ```
    <button type="button" class="btn btn-primary me-4" (click)="filterButtonClick('all')">
        All <span class="badge bg-danger">{{allEmployeeCount}}</span>
    </button>
    <button type="button" class="btn btn-primary mx-4" (click)="filterButtonClick('male')">
        Male <span class="badge bg-danger">{{maleEmployeeCount}}</span>
    </button>
    <button type="button" class="btn btn-primary mx-4" (click)="filterButtonClick('female')">
        Female <span class="badge bg-danger">{{femaleEmployeeCount}}</span>
    </button>
    ```
- The following are the changes required in the view template of EmployeeTableComponent i.e employee-table.component.html. notice choice event.
  ```
  <employee-filter [allEmployeeCount]="getAllEmployeesCount()" [maleEmployeeCount]="getMaleEmployeesCount()"
        [femaleEmployeeCount]="getFemaleEmployeesCount()" (choice)="onChoose($event)"></employee-filter>
  ```
- The $event object will have the clicked button value as that is what is passed as the event payload from the nested component.
- The event handler method (filterButtonClick()) in the nested component class emits the value by "choice" event emitter.


## LAB notes:
- I created Two components
	- Employee table component
	- Employee Filter component
- I used Employee Filter component inside a Employee Table component as child component.
	- It means -> employee table component will act as Parent/container component and Employee filter component will act as child component.
- Passing data from parent to child:
	- decorate the necessary properties inside the child component with @Input()
	- Pass values to the child component input properties from parent component using property binding.

- Emitting data from child to parent:
	- create a property inside the child component with the data type as EventEmitter<string> and decoraet with @Output()
		- example:  @Output() public choice: EventEmitter<String> = new EventEmitter();
	- Emit the value on any event ex: button click
	- In parent component -> write an event binding and set the method as value.
		example: <employee-filter-component (choice)="onChoose($event)"></employee-filter-component>
# Data Binding in angular
  - In Angular data-binding can be broadly classified into 3 categories.
    - *One way data-binding* - From Component to View Template
    - *One way data-binding* -  From View Template to Component
    - *Two way data-binding* - From Component to View Template & From View template to Component.
- ## One way data-binding - From Component to View Template:
  - To display read-only data on a view template we use one-way data binding technique interpolation. With interpolation, we place the component property name in the view template, enclosed in double curly braces: {{propertyName}}.
  - In the following example, Angular pulls the value of the firstName property from the component and inserts it between the opening and closing h1 element.
  ```
    import { Component } from '@angular/core';

    @Component({
        selector: 'my-app',
        template: `
                    <h1>{{ firstName }}</h1>
                `
    })
    export class AppComponent {
        firstName: string = 'Jack';
    }

  ```
  - It is also possible to concatenate a hard-coded string with the property value
{{'Name = ' + firstName}}
- You can specify any valid expression in double curly braces. For example you can have 
{{ 10 + 20 + 30 }}
- The above expression evaluates to 60
- suppose we have to bound imagePath property of the component class to `<img>` element src property using interpolation as shown below.
`<img src='{{imagePath}}'/>`

## Property binding in Angular
- Both Interpolation and Property binding flows a value in one direction, i.e from a component's data property into a target element property.
- We can rerwrite the above example, using property binding as shown below. Notice the `<img>` element src property is in a pair of square brackets, and the component class property is in quotes.
`<img [src]='imagePath'/>`
- Both Interpolation and Property binding flows a value in one direction, i.e from a component's data property into a target element property
## What is the difference between Interpolation and Property binding?
- Interpolation is a special syntax that Angular converts into a property binding. 

- Interpolation is just a convenient alternative to property binding. 

- In some cases like when we need to concatenate strings we have to use interpolation instead of property binding as shown in the example below.
`<img src='../../..assets/{{imagePath}}' />`
- When setting an element property to a non-string data value, you must use property binding. In the following example, we are disabling a button by binding to the boolean property isDisabled.
`<button [disabled]='isDisabled'>Click me</button>`
- If we use interpolation instead of property binding, the button is always disabled irrespective of isDisabled class property value
`<button disabled='{{isDisabled}}'>Click me</button>`

## Some important points to keep in mind when using Property binding
- Remember to enclose the property name with a pair of square brackets. If you omit the brackets, Angular treats the string as a constant and initializes the target property with that string.
`<img [src]='imagePath'/>`
- From security standpoint, Angular data binding sanitizes malicious content before displaying it on the browser. Both interpolation and property binding protects us from malicious content.
- In the example below we are using interpolation. Notice the malicious usage of `<script>` tag.
```
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<div>{{badHtml}}</div>'
})
export class AppComponent {
    badHtml: string = 'Hello <script>alert("Hacked");</script> World';
}
```
- Angular interpolation sanitizes the malicious content and displays the following in the browser.
  -  `Hello <script>alert("Hacked");</script> World`
- In this example below we are using property binding. 
  - `<div [innerHtml]="badHtml"></div>`
  
- Property binding sanitizes the malicious content slightly differently and we get the following output, but the important point to keep in mind is both the techniques protect us from malicious content and render the content harmlessly.
`Hello alert("Hacked"); World`

## Event Binding:
- How about flowing data in the opposite direction i.e from an HTML element to a component. When a user performs any action like clicking on a button, hovering over an element, selecting from a dropdownlist, typing in a textbox etc, then the corresponding event for that action is raised. We need to know when user performs these actions. We can use angular event binding to get notified when these events occur.

- For example the following is the syntax for binding to the click event of a button. Within parentheses on the left of the equal sign we have the target event, (click) in this case and on the right we have the template statement. In this case the onClick() method of the component class is called when the click event occurs.
`<button (click)="onClick()">Click me</button>`

- With event binding we can also use the on- prefix alternative as shown below. This is known as the canonical form
`<button on-click="onClick()">Click me</button>`

```
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<button (click)='onClick()' >Click me</button>`
})
export class AppComponent {
    onClick(): void {
        console.log('Button Clicked');
    }
}
```

## Two way binding
- Consider the following code in app.component.ts
```
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
                Name : <input [value]='name'>
                <br>
                You entered : {{name}}
              `
})
export class AppComponent {
    name: string = 'Tom';
}
```
- `<input [value]='name'>` : Binds component class "name" property to the input element’s value property
- `You entered : {{name}}` : Interpolation displays the value we have in "name" property on the web page.
- At the moment when we change the value in the textbox, that changed value is not reflected in the browser. One way to achieve this is by binding to the input event of the input control as shown below.
```
  Name : <input [value]='name' (input)='name = $event.target.value'>

  You entered : {{name}}
```
At this point, as we type in the textbox, the changed value is displayed on the page.
- So let's understand what is happening here. Conside this code 
- `[value]='name'` : This property binding flows data from the component class to element property 
- `(input)='name = $event.target.value'` : This event binding flows data in the opposite direction i.e from the element to component class property "name"
- `$event` - Is exposed by angular event binding, and contains the event data. To retrieve the value from the input element use - $event.target.value.
- `name = $event.target.value` - This expression updates the value in the name property in the component class.
- `You entered : {{name}}` - This interpolation expression will then display the value on the web page.
- So in short two-way data binding in Angular is a combination of both Property Binding and Event Binding. To save a few keystrokes and simplify two-way data binding angular has provided ngModel directive. So with ngModel directive we can rewrite the following line of code.
  ```Name : <input [value]='name' (input)='name = $event.target.value'>```
- ### *Like this : Name : `<input [(ngModel)]='name'>`*
- At this point if you view the page in the browser, you will get the following error
    ```Template parse errors:
    Can't bind to 'ngModel' since it isn't a known property of 'input'
    ```
- This is because ngModel directive is, in an Angular system module called FormsModule. For us to be able to use ngModel directive in our root module - AppModule, we will have to import FormsModule first.
- Here are the steps to import FormsModule into our AppModule
  1. Open app.module.ts file
  2. Include the following import statement in it
    import { FormsModule } from '@angular/forms';
  3. Also, include FormsModule in the 'imports' array of @NgModule
    imports: [BrowserModule, FormsModule]

With these changes, reload the web page and it will work as expected.

So here is the syntax for using two-way data binding in Angular
```<input [(ngModel)]='name'>```

  - The square brackets on the outside are for property binding 
  - The parentheses on the inside are for event binding
  - To easily remember this syntax, compare it to a banana in a box `[()]`
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
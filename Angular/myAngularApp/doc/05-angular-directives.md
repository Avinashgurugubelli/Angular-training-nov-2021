## Directives:

- Directives are instructions in the DOM. They specify how to place your components and business logic in the Angular.
- Directives are js class and declared as @directive. There are 3 directives in Angular.
  - Component directives
  - Structural Directives
  - Attribute Directives.
- `Component Directives:` Component directives are used in main class. They contain the detail of how the component should be processed, instantiated and used at runtime.
- `Structural Directives:` Structural directives start with a * sign. These directives are used to manipulate and change the structure of the DOM elements. For example, *ngIf directive, *ngSwitch directive, and *ngFor directive.
    - `ngIf Directive:` The ngIf allows us to Add/Remove DOM Element.
    - Example 1:
    ```
    <div *ngIf="isNeeded"> 
        Only render if the *isNeeded* value has true value. 
    </div>
    ```
    Example 2:
    ```
    <div *ngIf="isLogIn; else isLogOut"> 
        Hello you are logged in 
    </div>
    <ng-template #isLogOut> 
        You're logged out.. 
    </ng-template>
    ```
    - `*ngSwitch Directive:` The *ngSwitch allows us to Add/Remove DOM Element. It is similar to switch statement of javascript/typescript.
        ```
        <container-element [ngSwitch]="switch_expression">
            <some-element *ngSwitchCase="match_expression_1">...</some-element>
            <some-element *ngSwitchCase="match_expression_2">...</some-element>
            <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
            <ng-container *ngSwitchCase="match_expression_3">
                <!-- use a ng-container to group multiple root nodes -->
                <inner-element></inner-element>
                <inner-other-element></inner-other-element>
            </ng-container>
            <some-element *ngSwitchDefault>...</some-element>
        </container-element>
        ```
    - `*ngFor Directive:` The *ngFor directive is used to repeat a portion of HTML template once per each item from an iterable list (Collection).
    ```
        app.component.ts:
        ----------------
        list = [1,2,3,4,5];

        app.component.html:
        ------------------
        <ul> 
            <li *ngFor="let l of list">
                {{l}} 
            </li>
        </ul>
    ```
- `Attribute Directives:` Attribute directives are used to change the look and behavior of the DOM elements. For example: ngClass directive, and ngStyle directive etc.
  - ngClass Directive: The ngClass directive is used to add or remove CSS classes to an HTML element.
  - ngStyle Directive: The ngStyle directive facilitates you to modify the style of an HTML element using the expression. You can also use ngStyle directive to dynamically change the style of your HTML element.

## Creating a Custom Attribute Directive:
- Creating a custom directive is just like creating an Angular component. To create a custom directive we have to replace @Component decorator with @Directive decorator
- Creating a custom directive is just like creating an Angular component. To create a custom directive we have to replace @Component decorator with @Directive decorator
- Create an highlight.directive.ts file in src/app folder and add the code snippet below.
    ```
        import { Directive, ElementRef, Input, OnInit } from "@angular/core";
        @Directive({
            selector: '[highlight]'
        })
        export class HighlightDirective implements OnInit {
        
            @Input() public color: string = 'red';

            constructor(private elementRef: ElementRef) {
                console.log('HighlightDirective');
                console.log(elementRef);
            }

            ngOnInit(): void {
                this.elementRef.nativeElement.style.background = this.color;
            }
        }
    ```
- Here, we are importing Directive and ElementRef from Angular core. The Directive provides the functionality of @Directive decorator in which we provide its property selector to appHighLight so that we can use this selector anywhere in the application. We are also importing the ElementRef which is responsible for accessing the DOM element.
- Now to get Highlight Directive to work, we need to add our Directive to the declarations array in the app.module.ts file.
    ```
    @NgModule({
        declarations: [
        HighlightDirective
    ],
    imports: [
      BrowserModule, 
      FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```
    - Now we are going to use our newly created custom directive. I am adding the hightlight directive in the app.component.html but you can use it anywhere in the application.
    ```
    <h1 highlight>Highlight Me !</h1>
    ```
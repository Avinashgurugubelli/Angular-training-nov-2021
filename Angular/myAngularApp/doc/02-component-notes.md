## What is a component in Angular?
- A component in Angular is a class with a template and a decorator. So in simple terms a component in Angular is composed of these 3 things
- `Template` - Defines the user interface. Contains the HTML, directives and bindings.
- `Class` - Contains the code required for template. Just like a class in any object oriented programming language like C# or Java, a class in angular can contain methods and properties. Properties contain the data that we want to display in the view template and methods contain the logic for the view. We use TypeScript to create the class.
- `Decorator` - We use the Component decorator provided by Angular to add metadata to the class. A class becomes an Angular component, when it is decorated with the Component decorator.

## Component Example : 
we have created the angular project with Angular CLI. One of the files in the created project, is the app.component.ts file. You can find this file in the "app" folder. This file contain a component. The name of the component is AppComponent. The AppComponent is the root component of the application. 

```
// Component decorator is provided by the Angular core library, so we
// have to import it before using it. The import keyword is similar to
// using keyword in C#. Any exported member can be imported using import
// keyowrd.
import { Component } from '@angular/core';

// The class is decorated with Component decorator which adds metadata
// to the class. We use the @ symbol to apply a decorator to the class
// Applying a decorator on a class is similar to applying an attribute
// to a class in C# or other programming languages. Component is just
// one of the deveral built-in decorators provided by angular. We will
// discuss the other decorators provided by angular in upcoming videos
@Component({
    // component has several properties. Here we are using just 2. For
    // the full list of properties refer to the following URL
    // https://angular.io/docs/ts/latest/api/core/index/Component-decorator.html
    // To use this component on any HTML page we specify the selector
    // This selector becomes the directive <my-app> on the HTML page
    // At run time, the directive <my-app> is replaced by the template
    // HTML specified below
    selector: 'my-app',
    // The template contains the HTML to render. Notice in the HTML
    // we have a data-binding expression specified by double curly
    // braces. We have a defualt value "Angular" assigned to "name"
    // property in the AppComponent class. This will be used at runtime
    // inplace of the data-binding expression
    template: `<h1>Hello {{name}}</h1>`,
})
// export keyword allows this class to be exported, so other components 
// in the application can import and use it if required
export class AppComponent {
    // name is a property and the data type is string and
    // has a default value "angular"
    name: string = 'Angular';
}
```

## Creating a new component

- create a folder with the component name inside app folder
- create a template file(.html) in the folder
	- naming convention: component-name.component.html (example: home.component.html, about-us.component.html)
- create a styles files (.css/.scss) (if necesssary) - 
	- naming convention: component-name.component.scss (example: home.component.scss, about-us.component.scss)
	- create a class file (.ts file)
		naming convention: component-name.component.ts (example: home.component.ts, about-us.component.ts)
		- decorate the class with @component and provide templateURL and Styles URLS
        - example:
        ```
			@Component({
				selector: 'app-root',
				templateUrl: './app.component.html',
				styleUrls: ['./app.component.scss']
            })
			export class AppComponent {
					title = 'myAngularApp';
			}
        ```
	- declare a component inside a module.

## What are the differences between template and templateUrl properties and when to use one over the other?
- Angular recommends to extract templates into a separate file, if the view template is longer than 3 lines. Let's understand why is it better to extract a view template into a seprate file, if it is longer than 3 lines.

- With an inline template 
    - We loose Visual code editor intellisense, code-completion and formatting features.
T   - TypeScript code is not easier to read and understand when it is mixed with the inline template HTML.

- With an external view template
    - We have Visual code editor intellisense, code-completion and formatting features and 
    - Not only the code in "app.component.ts" is clean, it is also easier to read and understand
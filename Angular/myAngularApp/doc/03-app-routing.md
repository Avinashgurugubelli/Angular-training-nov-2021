## What is Routing in Angular?
- Routing basically means navigating between pages. You have seen many sites with links that direct you to a new page. This can be achieved using routing.
- Here the pages that we are referring to will be in the form of components.
- We have already seen how to create a component. Let us now create a component and see how to use routing with it.

## Exercise:
- Create following components: refer(`02-component-notes.md`)
  - Create a new component - say Nav-bar.component
  - Create a new component - say home.component
  - create a new component - say about-us.component
- Define new individual routes in app-routing.module.ts
- Provide href attributes to nav links

### Angular documentation links:
- https://angular.io/guide/router

### How to define a route?
- Importing your new components
  - To use your new components, import them into AppRoutingModule at the top of the file, as follows:
     ```
        import { HomeComponent } from './home.component';
        import { AboutUsComponent } from './about-us.component';
     ```
- Defining a basic route:
  - There are three fundamental building blocks to creating a route.
    - Import the `AppRoutingModule` into `AppModule` and add it to the imports array.
      - Note: `AppRoutingModule` into `AppModule` were automatically created under (src/app/) when you created the project using Angular CLI
    - Import `RouterModule` and `Routes` into your AppRoutingModule.
       - ```import { Routes, RouterModule } from '@angular/router';```
   - Define your routes in your Routes array.
     - ```
        const routes: Routes = [
            { path: 'home', component: HomeComponent },
            { path: 'about-us', component: AboutUsComponent }
        ];
    - Add your routes to your application (nav-bar.component.ts)
        - Now that you have defined your routes, add them to your application. First, add links to the two components(nav-bar menu). 
        - Assign the anchor tag that you want to add the route to the routerLink attribute. Set the value of the attribute to the component to show when a user clicks on each link. Next, update your component template to include `<router-outlet>`. This element informs Angular to update the application view with the component for the selected route.
        - Here we are using bootstrap nav bar menu.
          - ```
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">My First Angular App</a>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/home">Home</a>
                    </li>  
                    <li class="nav-item">
                        <a class="nav-link" href="/aboutUs">About us</a>
                    </li>  
                    </ul>
                </div>
                </div>
            </nav>

            <router-outlet></router-outlet>
            ```
- Save the the solution, build and run the app. to view the output and navigate to components via nav bar.
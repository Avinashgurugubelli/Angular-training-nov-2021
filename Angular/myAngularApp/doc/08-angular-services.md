# Dependency injection (DI) in Angular

- Dependencies are services or objects that a class needs to perform its function. Dependency injection, or DI, is a design pattern in which a class requests dependencies from external sources rather than creating them.

- Angular's DI framework provides dependencies to a class upon instantiation. Use Angular DI to increase flexibility and modularity in your applications.

## Creating an injectable service

```
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
  constructor() { }
}
```

## Registering service:
- We can register a service with the angular injector using the `providers` property of @Component decorator or @NgModule decorator.

```
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## references
-  https://angular.io/guide/dependency-injection
import { EmployeeService } from './nested-components/services/employee.service';
import { EmployeeFilterComponent } from './nested-components/employee-filter/employee-filter.component';
import { EmployeeTableComponent } from './nested-components/employees-table/employees-table.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HighlightDirective } from './directives/highlight.directive';
import { GenderPipe } from './pipes/gender-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    EmployeeListComponent,
    HighlightDirective,
    GenderPipe,
    EmployeeTableComponent,
    EmployeeFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

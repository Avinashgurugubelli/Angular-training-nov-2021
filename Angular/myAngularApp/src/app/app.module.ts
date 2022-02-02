import { MessageListComponent } from './life-cycle-hooks/components/message-list/message-list.component';
import { MessageComponent } from './life-cycle-hooks/components/message/message.component';
import { SubscriberTwoComponent } from './observables/components/subscriber-two/subscriber-two.component';
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
import { SubscriberComponent } from './observables/components/subscriber/subscriber.component';
import { EventGeneratorComponent } from './observables/components/event-generator/event-generator.component';
import { ObservableContainerComponent } from './observables/components/observable-container/observable-container.component';
import { MessageGeneratorComponent } from './observables/components/message-generator/message-generator.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    EmployeeListComponent,
    HighlightDirective,
    GenderPipe,
    EmployeeTableComponent,
    EmployeeFilterComponent,
    SubscriberComponent,
    EventGeneratorComponent,
    ObservableContainerComponent,
    SubscriberTwoComponent,
    MessageGeneratorComponent,
    MessageComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

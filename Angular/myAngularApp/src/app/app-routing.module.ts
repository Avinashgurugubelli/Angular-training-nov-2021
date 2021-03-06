import { MessageListComponent } from './life-cycle-hooks/components/message-list/message-list.component';
import { SubscriberComponent } from './observables/components/subscriber/subscriber.component';
import { EmployeeTableComponent } from './nested-components/employees-table/employees-table.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ObservableContainerComponent } from './observables/components/observable-container/observable-container.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'employee-list', component: EmployeeListComponent
  },
  {
    path: 'nested-component-example', component: EmployeeTableComponent
  },
  {
    path: 'observable-example', component: SubscriberComponent
  },
  {
    path: 'observable-with-sibling-example', component: ObservableContainerComponent
  },
  {
    path: 'life-cycle-hooks', component: MessageListComponent
  },
  {
    path: 'articles',
    loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

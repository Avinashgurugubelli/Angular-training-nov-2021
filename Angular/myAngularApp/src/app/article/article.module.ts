    import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ArticleContainerComponent } from './components/article-container/article-container.component';
import { ArticleRoutingModule } from './article-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ArticlesListComponent,
    ArticleFormComponent,
    ArticleContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ArticleRoutingModule,
  ]
})
export class ArticleModule { }

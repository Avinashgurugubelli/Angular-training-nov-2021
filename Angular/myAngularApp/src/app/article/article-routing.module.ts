import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ArticleContainerComponent } from './components/article-container/article-container.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    {
        path: '',
        component: ArticleContainerComponent
    },
    {
        path: 'article-list',
        component: ArticlesListComponent
    },
    {
        path: 'article-form',
        component: ArticleFormComponent
    },
    {
        path: 'article-form/:id',
        component: ArticleFormComponent
    }
]

@NgModule({
    imports: [
        RouterModule,
        RouterModule.forChild(routes)
    ],
    exports: []
})
export class ArticleRoutingModule { }

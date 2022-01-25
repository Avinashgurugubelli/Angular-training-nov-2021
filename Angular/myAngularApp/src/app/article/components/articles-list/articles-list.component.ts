import { Article } from './../../models/article';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Observable, EMPTY } from 'rxjs';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  public articles$: Observable<Article[]> = EMPTY

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articles$ = this.articleService.getAllArticles();
  }

  private fetchArticles() {
    this.articles$ = this.articleService.getAllArticles();
  }

  edit(id: string) {

  }

  delete(id: string) {
    this.articleService.deleteArticle(id).subscribe(() => {
      alert(`Article with ID ${id} deleted successfully`);
      this.fetchArticles();
    });
  }
}

import { Article } from './../../models/article';
import { ArticleService } from './../../services/article.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  public formContext: 'create' | 'edit' = 'create';
  public message: string | null = null;
  public showForm: boolean = false;

  public article: Article = {
    avatar: '',
    createdAt: '',
    id: '',
    name: ''
  };

  public articleForm: FormGroup = new FormGroup({});

  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id != undefined) {
        this.formContext = 'edit';
        this.fetchArticleById(id);
      }
      else {
        this.formContext = 'create';
        this.buildForm();
        this.showForm = true;
      }
    });

  }

  private buildForm() {
    const formKeys: string[] = Object.keys(this.article);
    formKeys.forEach((key: string) => {
      const value: string = this.article[key];
      console.log(`key: ${key}, value: ${value}`)
      this.articleForm.addControl(key, new FormControl(value));
    });
  }

  private fetchArticleById(id: string) {
    this.articleService.getAllArticlesById(id).subscribe((article: Article) => {
      this.article = article;
      this.buildForm();
      this.showForm = true;
    })
  }

  public saveArticle() {
    if (this.formContext === 'create') {
      this.articleService.saveArticle(this.articleForm.getRawValue()).subscribe((response: Article) => {
        this.message = 'Article added successfully !'
      });
    }
    else {
      this.articleService.updateArticle(this.article.id, this.articleForm.getRawValue()).subscribe((response: Article) => {
        this.message = 'Article updated successfully !'
      });
    }
  }

  public goToArticles() {
    this.router.navigateByUrl('/articles');
  }

}

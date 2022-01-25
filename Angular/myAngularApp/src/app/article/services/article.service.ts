import { catchError, map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ArticleService {

    constructor(private http: HttpClient) { }

    public getAllArticles(): Observable<Article[]> {
        const url: string = 'https://60d824306f13520017a68179.mockapi.io/api/v1/articles';
        return this.http.get<Article[]>(url, { observe: 'response' }).pipe(
            map(response => response.body ? response.body : []),
            catchError(this.handleError<Article[]>())
        );
    }

    public getAllArticlesById(id: string): Observable<Article> {
        const url: string = `https://60d824306f13520017a68179.mockapi.io/api/v1/articles/${id}`;
        return this.http.get<Article>(url, { observe: 'response' }).pipe(
            map(response => response.body ? response.body :<Article>{}),
            catchError(this.handleError<Article>())
        );
    }

    public saveArticle(data: Article): Observable<Article> {
        const url: string = "https://60d824306f13520017a68179.mockapi.io/api/v1/articles";
        return this.http.post<Article>(url, data, { observe: 'response' }).pipe(
            map(response => response.body ? response.body : <Article>{}),
            catchError(this.handleError<Article>())
        );
    }

    public updateArticle(id: string, data: Article): Observable<Article> {
        const url: string = `https://60d824306f13520017a68179.mockapi.io/api/v1/articles/${id}`;
        return this.http.put<Article>(url, data, { observe: 'response' }).pipe(
            map(response => response.body ? response.body : <Article>{}),
            catchError(this.handleError<Article>())
        );
    }

    public deleteArticle(id: string): Observable<Article> {
        const url: string = `https://60d824306f13520017a68179.mockapi.io/api/v1/articles/${id}`;
        return this.http.delete<Article>(url, { observe: 'response' }).pipe(
            map(response => response.body ? response.body : <Article>{}),
            catchError(this.handleError<Article>())
        );
    }

    private handleError<T>() {
        return (error: HttpErrorResponse): Observable<T> => {
            console.log('HTTP error occurred ' + JSON.stringify(error));
            throw error;
        };
    }

}
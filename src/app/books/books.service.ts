import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { SERVICES } from '../app.constants';
import { map, catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';
import { IBook } from './i-book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(SERVICES)
  }

  updateBook(book: IBook): Observable<any> {
    return this.http.put<any>(SERVICES + '/books/' + book.id, {owned: book.owned});
  }

  insertBook(book: IBook): Observable<any> {
    return this.http.post<any>(SERVICES + '/books', book);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete<any>(SERVICES + "/books/" + id);
  }
}
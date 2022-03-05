import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
}

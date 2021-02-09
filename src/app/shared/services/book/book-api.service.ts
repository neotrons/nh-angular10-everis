import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Book } from '../../interfaces/book';
import { environment } from 'src/environments/environment';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root'
})
export class BookApiService extends BookService {

  apiUrl: string = environment.apiUrl;
  private http: HttpClient

  constructor(handler: HttpBackend) { 
    super();
    this.http = new HttpClient(handler);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/book/shop/`);
  }

  getFeaturedBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/book/shop/?featured=true`);
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/book/shop/${id}/`);
  }
}

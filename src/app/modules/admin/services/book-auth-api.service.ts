import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Book } from 'src/app/shared/interfaces/book';
import { MyBook } from '../models/my-book.model';

@Injectable({
  providedIn: 'root'
})
export class BookAuthApiService {

  apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/book/`);
  }

  getBook(bookId: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/book/${bookId}/`);
  }

  getBooksHarcodeToken(): Observable<Book[]> {
    const extraHeaders = new HttpHeaders({
      Authorization: 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNjEyNTc2NTczLCJlbWFpbCI6ImpjcmFtaXJlenRlbGxvQGdtYWlsLmNvbSIsIm9yaWdfaWF0IjoxNjEyNTcyOTczfQ.fwXLVK-3r_4yPcOAKeDkpzAvi1CqeVJ2Szj1ZATmD7k'
    })
    return this.http.get<Book[]>(`${this.apiUrl}/book/`, {
      headers: extraHeaders
    });
  }

  createBook(book: MyBook): Observable<MyBook> {
    const bookFormData = this.createFormData(book);
    return this.http.post<MyBook>(`${this.apiUrl}/book/`, bookFormData).pipe(
      map( res => new MyBook().deserialize(res) )
    );
  }

  editBook(book: MyBook): Observable<MyBook> {
    const bookFormData = this.createFormData(book);
    return this.http.patch<MyBook>(`${this.apiUrl}/book/${book.id}/`, bookFormData).pipe(
      map(res => new MyBook().deserialize(res))
    )
  }

  private createFormData(book: MyBook) {
    const formData = new FormData();
    formData.append('name', book.name);
    formData.append('isbn', book.isbn);
    if (book.image) {
      formData.append('image', book.image, book.image.name);
    }
    formData.append('language', book.language);
    formData.append('publishedDate', book.publishedDateFormat());
    formData.append('publisher', book.publisher);
    formData.append('numberPages', String(book.numberPages));
    formData.append('license', book?.license);
    formData.append('summary', book.summary);
    return formData;
  }

  deleteBook(bookId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/book/${bookId}/`);
  }
}

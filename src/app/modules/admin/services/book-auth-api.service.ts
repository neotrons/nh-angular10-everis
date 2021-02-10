import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Book } from 'src/app/shared/interfaces/book';
import { formatDate } from '@angular/common';
import { MyBook } from '../models/my-book.model'

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

  getBooksHarcodeToken(): Observable<Book[]> {
    const extraHeaders = new HttpHeaders({
      Authorization: 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNjEyNTc2NTczLCJlbWFpbCI6ImpjcmFtaXJlenRlbGxvQGdtYWlsLmNvbSIsIm9yaWdfaWF0IjoxNjEyNTcyOTczfQ.fwXLVK-3r_4yPcOAKeDkpzAvi1CqeVJ2Szj1ZATmD7k'
    })
    return this.http.get<Book[]>(`${this.apiUrl}/book/`, {
      headers: extraHeaders
    });
  }

  createBook(bookData: MyBook): Observable<Book> {
    const bookFormData = this.createFormData(bookData);
    return this.http.post<Book>(`${this.apiUrl}/book/`, bookFormData);
  }

  private createFormData(book: MyBook) {
    const formData = new FormData();
    formData.append('name', book.name);
    formData.append('isbn', book.isbn);
    if (book.image) {
      formData.append('image', book.image, book.image['name']);
    }
    formData.append('language', book.language);
    formData.append('publishedDate', formatDate(book.publishedDate, 'yyyy-MM-dd', 'en'));
    formData.append('publisher', book.publisher);
    formData.append('numberPages', String(book.numberPages));
    formData.append('license', book?.license);
    formData.append('summary', book.summary);
    return formData;
  }

  getBook(bookId: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/book/${bookId}/`)
  }

  editBook(bookData: MyBook): Observable<Book> {
    const bookFormData = this.createFormData(bookData);
    const bookId = bookData.id;
    return this.http.patch<Book>(`${this.apiUrl}/book/${bookId}/`, bookFormData);
  }
}

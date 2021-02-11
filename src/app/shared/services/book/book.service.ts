import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Book } from '../../interfaces/book';
import { IBookService } from '../../interfaces/book-service';

@Injectable({
  providedIn: 'root'
})
export class BookService implements IBookService {

  constructor() { }

  getBooks(): Observable<Book[]> {
    return;
  }

  getFeaturedBooks(): Observable<Book[]> {
    return;
  }

  getBook(id: number): Observable<Book> {
    return;
  }
}

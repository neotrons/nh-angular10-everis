import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Book } from '../../interfaces/book';
import { booksMock } from '../../mocks/books.mock';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root'
})
export class BookMockService extends BookService {

  constructor() {
    super();
  }

  getBooks(): Observable<Book[]> {
    return new Observable(observer => {
      observer.next(booksMock);
    });
  }

  getFeaturedBooks(): Observable<Book[]> {
    return new Observable(observer => {
      const featuredBooks: Book[] = booksMock.filter(book => book.featured === true);
      observer.next(featuredBooks);
      setTimeout(() => {
        observer.next(booksMock);
      }, 10000);
    });
  }

  getBook(id: number): Observable<Book> {
    return new Observable(observer => {
      const book: Book = booksMock.find(book => book.id === id); // tslint:disable-line
      observer.next(book);
    });
  }
}

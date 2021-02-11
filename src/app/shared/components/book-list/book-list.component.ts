import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../interfaces/book';
import { BookService } from '../../services/book/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  @Input() isFeatured = false;
  @Input() showBooks = 4;
  books: Book[];
  classShowBook: number;
  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.fetchBooks();
    this.classShowBook = 12 / this.showBooks;
  }

  fetchBooks(): void {
    if (this.isFeatured) {
      this.bookService.getFeaturedBooks().subscribe(
        books => this.books = books
      );
    }else {
      this.bookService.getBooks().subscribe(
        books => this.books = books
      );
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/interfaces/book';
import { BookAuthApiService } from '../../services/book-auth-api.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss'],
  providers: [ConfirmationService, ]
})
export class BookTableComponent implements OnInit {

  books: Book[];
  constructor(
    private bookService: BookAuthApiService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.bookService.getBooks().subscribe(
      books => this.books = books
    );
  }

  deleteConfirm(book: Book): void {
    this.confirmationService.confirm({
      message: `Esta seguro que desea eliminar el libro ${book.name}`,
      accept: () => {
        this.bookService.deleteBook(book.id).subscribe(
          res => console.log('Libro eliminado')
        );
      }
    });
  }

}

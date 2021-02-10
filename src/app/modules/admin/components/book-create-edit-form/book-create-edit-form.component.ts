import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from 'src/app/shared/interfaces/book';
import { BookAuthApiService } from '../../services/book-auth-api.service';
import { MyBook } from '../../models/my-book.model';

@Component({
  selector: 'app-book-create-edit-form',
  templateUrl: './book-create-edit-form.component.html',
  styleUrls: ['./book-create-edit-form.component.scss']
})
export class BookCreateEditFormComponent implements OnInit {

  @Input() bookId: number;
  bookForm: FormGroup;
  book: MyBook; 

  constructor(
    private fb: FormBuilder,
    private bookService: BookAuthApiService
  ) { 
    this.book = new MyBook();
  }

  ngOnInit(): void {
    this.createOrEditForm();
  }

  createOrEditForm() {
    if (this.bookId) {
      this.bookService.getBook(this.bookId).subscribe(
        book => {
          this.book.deserialize(book);
          this.initForm();
        }
      )
    }else {
      this.initForm();
    }
  }

  initForm(): void {
    this.bookForm = this.fb.group({
      name: [this.book.name, Validators.required],
      isbn: [this.book.isbn, [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(16),
        Validators.pattern(/^[0-9]+$/)
      ]],
      image: [null],
      language: [this.book.language, Validators.pattern(/^es|en$/)],
      publishedDate: [this.book.publishedDate, Validators.required],
      publisher: [this.book.publisher, Validators.required],
      numberPages: [this.book.numberPages, Validators.min(0)],
      license: [this.book.license],
      summary: [this.book.summary, Validators.required]
    });
  }

  get f() {
    return this.bookForm.controls;
  }

  onsubmit() {
    if(this.bookForm.valid) {
      const bookData: Book = this.bookForm.value;
      this.bookService.createBook(bookData).subscribe(
        book => console.log("Libro creado correctamente", book)
      )
    }
  }

  onChangeFile(event) {
    const image: File = event.target.files[0];
    this.bookForm.get('image').setValue(image);
    this.imagePeview(image);
  }

  imagePeview(image: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      this.book.imageUrl = reader.result as string;
    };
  }
}

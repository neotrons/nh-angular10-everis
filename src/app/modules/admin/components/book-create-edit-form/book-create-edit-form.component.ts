import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from 'src/app/shared/interfaces/book';
import { MyBook } from '../../models/my-book.model';
import { BookAuthApiService } from '../../services/book-auth-api.service';

@Component({
  selector: 'app-book-create-edit-form',
  templateUrl: './book-create-edit-form.component.html',
  styleUrls: ['./book-create-edit-form.component.scss']
})
export class BookCreateEditFormComponent implements OnInit {

  @Input() bookId: number;
  bookForm: FormGroup;
  bookModel: MyBook = new MyBook();

  constructor(
    private fb: FormBuilder,
    private bookService: BookAuthApiService
  ) { }

  ngOnInit(): void {
    if (this.bookId) {
      this.bookService.getBook(this.bookId).subscribe(
        book => {
          this.bookModel.deserialize(book);
          this.initForm();
        }
      )
    } else {
      this.initForm();
    }
    
  }

  initForm(): void {
    this.bookForm = this.fb.group({
      name: [this.bookModel.name, Validators.required],
      isbn: [this.bookModel.isbn, [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(16),
        Validators.pattern(/^[0-9]+$/)
      ]],
      image: [null],
      language: [this.bookModel.language, Validators.pattern(/^es|en$/)],
      publishedDate: [this.bookModel.publishedDate, Validators.required],
      publisher: [this.bookModel.publisher, Validators.required],
      numberPages: [this.bookModel.numberPages, Validators.min(0)],
      license: [this.bookModel.license],
      summary: [this.bookModel.summary, Validators.required]
    });
  }

  get f() {
    return this.bookForm.controls;
  }

  onsubmit() {
    if(this.bookForm.valid) {
      const bookData: Book = this.bookForm.value;
      this.bookModel.deserialize(this.bookForm.value);
      console.log(this.bookModel.id);
      if (this.bookModel.id) {
        this.bookService.editBook(this.bookModel).subscribe(
          book => console.log("Libro creado correctamente", book)
        )
      }else {
        this.bookService.createBook(this.bookModel).subscribe(
          book => console.log("Libro creado correctamente", book)
        )
      }
    }
  }

  onChangeFile(event) {
    const image: File = event.target.files[0];
    this.bookForm.get('image').setValue(image);

    const reader = new FileReader();
    
    const [file] = event.target.files;
    reader.readAsDataURL(image);
    reader.onload = () => {
      this.bookModel.imageUrl = reader.result as string;
    };
  }
}

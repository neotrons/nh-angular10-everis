import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from 'src/app/shared/interfaces/book';
import { BookAuthApiService } from '../../services/book-auth-api.service';

@Component({
  selector: 'app-book-create-edit-form',
  templateUrl: './book-create-edit-form.component.html',
  styleUrls: ['./book-create-edit-form.component.scss']
})
export class BookCreateEditFormComponent implements OnInit {

  bookForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bookService: BookAuthApiService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.bookForm = this.fb.group({
      name: [null, Validators.required],
      isbn: [null, [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(16),
        Validators.pattern(/^[0-9]+$/)
      ]],
      image: [null],
      language: [null, Validators.pattern(/^es|en$/)],
      publishedDate: [null, Validators.required],
      publisher: [null, Validators.required],
      numberPages: [null, Validators.min(0)],
      license: [null],
      summary: [null, Validators.required]
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
  }
}

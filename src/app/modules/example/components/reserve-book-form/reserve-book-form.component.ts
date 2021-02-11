import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ReserveValidators } from './validators';

@Component({
  selector: 'app-reserve-book-form',
  templateUrl: './reserve-book-form.component.html',
  styleUrls: ['./reserve-book-form.component.scss']
})
export class ReserveBookFormComponent implements OnInit {

  reserveForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.reserveForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      reemail: new FormControl(null, [Validators.required, Validators.email]),
      isbn: new FormControl(null, [
        Validators.required,
        Validators.maxLength(6),
        Validators.minLength(6),
        Validators.pattern(/^[0-9]+$/),
        ReserveValidators.isbnExists
      ]),
    }, [
      ReserveValidators.emailMatchValidator
    ]);
  }

  get firstName(): AbstractControl {
    return this.reserveForm.get('firstName');
  }

  get f(): any {
    return this.reserveForm.controls;
  }
}

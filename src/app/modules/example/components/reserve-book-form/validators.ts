import { FormGroup, AbstractControl } from '@angular/forms';

export class ReserveValidators {

  static emailMatchValidator(form: FormGroup): any {
    const email = form.get('email').value;
    const reemail = form.get('reemail').value;
    return email === reemail ? null : {notMatch: true};
  }

  static isbnExists(control: AbstractControl): any {
    const BooksIsbn = ['252621', '252622', '252623'];
    return BooksIsbn.includes(control.value) ? null : { notExists: true};
  }
}

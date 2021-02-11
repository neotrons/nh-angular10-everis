import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    const formData = this.buildForm();
    this.registerForm = this.fb.group(formData);
  }

  buildForm(): any {
    return {
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      username: [null, Validators.required, Validators.maxLength(12)],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required]
    };
  }

  get f(): any {
    return this.registerForm.controls;
  }

}

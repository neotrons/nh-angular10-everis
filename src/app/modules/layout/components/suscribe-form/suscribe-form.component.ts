import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { SuscribeService } from '../../services/suscribe.service';

@Component({
  selector: 'app-suscribe-form',
  templateUrl: './suscribe-form.component.html',
  styleUrls: ['./suscribe-form.component.scss']
})
export class SuscribeFormComponent implements OnInit {

  suscribeForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private suscribeService: SuscribeService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.suscribeForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]]
    });
  }

  get email(): AbstractControl {
    return this.suscribeForm.get('email');
  }

  toSuscribe(suscribeForm): void {
    if (suscribeForm.valid) {
      this.suscribeService.save(suscribeForm.get('email').value);
    }
  }
}

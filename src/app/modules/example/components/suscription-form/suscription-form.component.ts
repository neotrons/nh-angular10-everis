import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Suscription } from './suscription.model';

@Component({
  selector: 'app-suscription-form',
  templateUrl: './suscription-form.component.html',
  styleUrls: ['./suscription-form.component.scss']
})
export class SuscriptionFormComponent implements OnInit {

  model: Suscription;

  constructor() { }

  ngOnInit(): void {
    this.setForm();
  }

  setForm(): void  {
    this.model = new Suscription(
      'jose ramirez',
      'jcramireztello@gmail.com',
      {
        city: 'Lima',
        zipcode: 'Lima 25',
        street: 'Jesus maria'
      }
    );
  }

  onSubmit(suscriptionForm: NgForm): void {
    if (suscriptionForm.valid) {
      console.log(suscriptionForm.value);
      console.log(this.model);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertService } from '../alert/alert.service';

@Component({
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent implements OnInit {
  countries = ['Slovakia', 'Czechia', 'Poland'];

  contactForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: 'Michal',
      surname: undefined,
      email: '@capco.sk',
      message: undefined,
      address: this.fb.group({
        city: undefined,
        street: undefined,
        houseNumber: undefined,
        country: undefined,
      }),
      agreement: undefined,
    });
  }

  submit(): void {
    this.alertService.addInfoAlert('Form Submitted');
    console.log(this.contactForm.value);
  }
}

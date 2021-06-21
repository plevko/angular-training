import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent implements OnInit {
  countries = ['Slovakia', 'Czechia', 'Poland'];

  contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

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
}

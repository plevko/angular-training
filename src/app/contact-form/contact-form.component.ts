import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
      name: ['Michal', Validators.required],
      surname: [undefined, Validators.required],
      email: ['@capco.sk', Validators.email],
      message: [undefined, Validators.minLength(10)],
      address: this.fb.group({
        city: undefined,
        street: undefined,
        houseNumber: undefined,
        country: undefined,
      }),
      agreement: [undefined, Validators.requiredTrue],
    });
  }

  submit(): void {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.valid) {
      this.alertService.addSuccessAlert('Valid');
    } else {
      this.alertService.addDangerAlert('Invalid');
    }
  }

  getErrorMessage(formControl: AbstractControl | null): string {
    if (formControl?.hasError('required')) {
      return 'This field is required';
    }

    if (formControl?.hasError('requiredTrue')) {
      return 'Muset be true';
    }

    return 'Invalid field';
  }
}

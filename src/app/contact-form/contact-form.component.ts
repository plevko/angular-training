import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AlertService } from '../alert/alert.service';
import { CommonValidators } from '../shared/validators/common-validators';

@Component({
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent implements OnInit {
  countries = ['Slovakia', 'Czechia', 'Poland'];

  filledForm = {
    name: 'Michal',
    surname: 'Test',
    address: {
      street: 'Ulica',
      country: 'Slovakia',
    },
  };

  contactForm!: FormGroup;

  @ViewChild('form') formDirective!: FormGroupDirective;

  constructor(
    private readonly fb: FormBuilder,
    private readonly alertService: AlertService,
    private readonly translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['Michal', Validators.required],
      surname: [undefined, Validators.required],
      email: ['@capco.sk', CommonValidators.capcoEmail()],
      message: [undefined, Validators.minLength(10)],
      address: this.fb.group({
        city: undefined,
        street: undefined,
        houseNumber: undefined,
        country: undefined,
      }),
      agreement: [undefined, Validators.requiredTrue],
    });

    this.contactForm.valueChanges.subscribe((formValue) => {
      console.log(formValue);
    });

    this.contactForm.get('surname')?.valueChanges.subscribe((value) => {
      console.log(value);
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
      return $localize`This field is required`;
    }
    if (formControl?.hasError('capcoEmail')) {
      return 'Email must end with @capco.sk';
    }

    return 'Invalid field';
  }

  fillForm(): void {
    this.contactForm.patchValue(this.filledForm);
  }

  resetForm(): void {
    this.contactForm.reset();
    this.formDirective.resetForm();
  }

  getCountryTranslation(country: string): string {
    return this.translateService.instant(`country.${country}`);
  }
}

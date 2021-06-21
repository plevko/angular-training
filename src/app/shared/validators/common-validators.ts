import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CommonValidators {
  private static capcoEmailRegex = /.+@capco\.sk$/;

  static capcoEmail(): ValidatorFn  {
    return (emailFormControl: AbstractControl): ValidationErrors | null => {
      return CommonValidators.capcoEmailRegex.test(emailFormControl.value)
        ? null
        : {
            capcoEmail: true,
          };
    };
  };
}

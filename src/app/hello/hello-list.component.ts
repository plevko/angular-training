import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  templateUrl: './hello-list.component.html',
})
export class HelloListComponent {
  name = 'Main name';
  date = new Date();

  testNumbers = [0, 1, 4];
  testSelectOptions = ['SK', 'EN', 'HU'];

  getName(): string {
    return 'Miroslav';
  }

  constructor(@Inject(LOCALE_ID) public locale: string) {}
}

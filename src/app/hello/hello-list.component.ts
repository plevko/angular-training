import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  templateUrl: './hello-list.component.html',
})
export class HelloListComponent {
  name = 'Main name';
  date = new Date();

  getName(): string {
    return 'Miroslav';
  }

  constructor(@Inject(LOCALE_ID) public locale: string) {}
}

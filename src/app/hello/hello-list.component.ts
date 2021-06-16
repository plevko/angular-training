import { Component } from '@angular/core';

@Component({
  templateUrl: './hello-list.component.html',
})
export class HelloListComponent {
  name = 'Main name';

  getName(): string {
    return 'Miroslav';
  }
}

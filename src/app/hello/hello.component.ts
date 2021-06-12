import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
})
export class HelloComponent {
  title = 'angular';

  htmlExample = '<div>Hello angular</div>';

  getName(): string {
    return 'Angular function';
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular';

  htmlExample = '<div>Hello angular</div>';

  getName(): string {
    return 'Angular function';
  }
}

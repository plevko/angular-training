import { AlertService } from './alert.service';
import { Alert } from './alert.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
})
export class AlertListComponent {
  get alerts(): Alert[] {
    return this.alertService.alerts;
  }
  constructor(private readonly alertService: AlertService) {}

  removeAlert(alert: Alert): void {
    this.alertService.removeAlert(alert);
  }
}

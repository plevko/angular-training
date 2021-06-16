import { AlertType } from './alert-type.enum';
import { Alert } from './alert.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {
  alerts: Alert[] = [];

  addSuccessAlert(message: string): void {
    this.addAlert({
      message,
      type: AlertType.success,
    });
  }

  addDangerAlert(message: string): void {
    this.addAlert({
      message,
      type: AlertType.danger,
    });
  }

  addInfoAlert(message: string): void {
    this.addAlert({
      message,
      type: AlertType.info,
    });
  }

  removeAlert(alertToRemvoe: Alert): void {
    const indexToRemove = this.alerts.findIndex(
      (alert) => alert === alertToRemvoe
    );
    this.alerts.splice(indexToRemove, 1);
  }

  private addAlert(alert: Alert): void {
    this.alerts.push(alert);
  }
}

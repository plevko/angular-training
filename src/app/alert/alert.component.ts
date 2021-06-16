import { Alert } from './alert.model';
import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() alert!: Alert;
  @Output() remove = new EventEmitter();

  ngOnInit(): void {
    setTimeout(() => {
        this.removeMe();
    }, 1000);
  }

  ngOnDestroy(): void {
      console.log('alert destroyed');
  }

  getAlertClass(): string {
    return `alert-${this.alert.type}`;
  }

  removeMe(): void {
    this.remove.emit();
  }
}

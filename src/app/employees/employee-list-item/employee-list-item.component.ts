import { Employee } from './../../model/employee.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styleUrls: ['./employee-list-item.component.scss'],
})
export class EmployeeListItemComponent {
  @Input() employee!: Employee;

  detailVisible = false;
  addressVisible = false;

  toggleDetail(): void {
    this.detailVisible = !this.detailVisible;
  }

  toggleAddress(): void {
    this.addressVisible = !this.addressVisible;
  }
}

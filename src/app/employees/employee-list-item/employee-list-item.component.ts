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

  getAddress(): string {
    return this.employee.address
      ? `Street: ${this.employee.address.street} HouseNumber: ${this.employee.address.houseNumber} City: ${this.employee.address.city} Country: ${this.employee.address.country}`
      : 'No address';
  }
}

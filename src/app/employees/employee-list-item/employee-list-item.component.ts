import { Employee } from './../../model/employee.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styleUrls: ['./employee-list-item.component.scss'],
})
export class EmployeeListItemComponent {
  @Input() employee!: Employee;

  @Output() duplicate = new EventEmitter<Employee>();
  @Output() remove = new EventEmitter();

  detailVisible = false;
  addressVisible = false;

  toggleDetail(): void {
    this.detailVisible = !this.detailVisible;
  }

  toggleAddress(): void {
    this.addressVisible = !this.addressVisible;
  }

  duplicateEmployee(): void {
    this.duplicate.emit(this.employee);
  }

  removeEmployee(): void {
    this.remove.emit();
  }
}

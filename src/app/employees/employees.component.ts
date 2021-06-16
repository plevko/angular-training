import { AlertService } from './../alert/alert.service';
import { EmployeeListItemComponent } from './employee-list-item/employee-list-item.component';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
})
export class EmployeesComponent implements AfterViewInit {
  @ViewChild('employeeOfTheMonth')
  employeeOfTheMonthListItem!: EmployeeListItemComponent;

  @ViewChild('employeeOfTheWeek')
  employeeOfTheWeekListItem!: EmployeeListItemComponent;

  @ViewChildren('employee')
  employeeListItems!: QueryList<EmployeeListItemComponent>;

  @ViewChildren(EmployeeListItemComponent)
  allEmployeeListItems!: QueryList<EmployeeListItemComponent>;

  employees: Employee[] = [
    {
      name: 'Michal',
      surname: 'Test',
      email: 'test@test.sk',
      id: 1,
      phone: '+421903123123',
      address: {
        city: 'Bratislava',
        country: 'Slovensko',
        houseNumber: '128/A',
        street: 'Kolárova',
      },
    },
    {
      name: 'Jozef',
      surname: 'Test',
      email: 'jozef@test.sk',
      id: 2,
      phone: '+421903123123',
      address: {
        city: 'Bratislava',
        country: 'Slovensko',
        houseNumber: '128/A',
        street: 'Kolárova',
      },
    },
    {
      name: 'Peter',
      surname: 'Test',
      email: 'peter@test.sk',
      id: 3,
      phone: '+421903123123',
    },
  ];

  constructor(
    private readonly alertService: AlertService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.toggleAllItems();
    this.cdr.detectChanges();
  }

  onDuplicate(employee: Employee): void {
    this.employees.push(employee);

    this.alertService.addSuccessAlert('Employee duplicated');
  }

  onRemove(index: number): void {
    this.employees.splice(index, 1);

    this.alertService.addDangerAlert('Employee removed');
  }

  toggleEmployees(): void {
    this.employeeListItems.forEach((item) => {
      this.toggleEmployeeAddressAndDetail(item);
    });
  }

  toggleAllItems(): void {
    this.allEmployeeListItems.forEach((item) => {
      this.toggleEmployeeAddressAndDetail(item);
    });
  }

  toggleEmployeeOfTheMonth(): void {
    this.toggleEmployeeAddressAndDetail(this.employeeOfTheMonthListItem);
  }

  toggleEmployeeOfTheWeek(): void {
    this.toggleEmployeeAddressAndDetail(this.employeeOfTheWeekListItem);
  }

  private toggleEmployeeAddressAndDetail(
    employeeListItemComponent: EmployeeListItemComponent
  ): void {
    employeeListItemComponent.toggleAddress();
    employeeListItemComponent.toggleDetail();
  }
}

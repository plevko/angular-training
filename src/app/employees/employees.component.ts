import { Employee } from '../model/employee.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
})
export class EmployeesComponent {
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

  selectedEmployee?: Employee;

  showDetail(employee: Employee): void {
    this.selectedEmployee = employee;
  }
}

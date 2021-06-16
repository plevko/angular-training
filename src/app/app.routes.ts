import { HelloListComponent } from './hello/hello-list.component';
import { Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';

export const appRoutes: Routes = [
  {
    path: 'employees',
    component: EmployeesComponent,
  },
  {
    path: 'hellos',
    component: HelloListComponent,
  },
];

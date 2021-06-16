import { Routes } from '@angular/router';
import { HelloListComponent } from './hello/hello-list.component';

export const appRoutes: Routes = [
  {
    path: 'employees',
    loadChildren: () =>
      import('./employees/employees.module').then((m) => m.EmployeesModule),
  },
  {
    path: 'hellos',
    component: HelloListComponent,
  },
  {
    path: 'todos',
    loadChildren: () =>
      import('./todos/todos.module').then((m) => m.TodosModule),
  },
];

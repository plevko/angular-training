import { TodosComponent } from './todos.component';
import { Routes } from '@angular/router';
import { TodosResolver } from './todos.resolver';

export const todosRoutes: Routes = [
  {
    path: '',
    component: TodosComponent,
    resolve: {
      todos: TodosResolver,
    },
  },
];

import { todosRoutes } from './todos.routes';
import { RouterModule } from '@angular/router';
import { TodosComponent } from './todos.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TodosComponent],
  imports: [CommonModule, RouterModule.forChild(todosRoutes), HttpClientModule],
})
export class TodosModule {}

import { employeesRoutes } from './employees.routes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddressPipe } from '../shared/pipes/address.pipe';
import { EmployeeListItemComponent } from './employee-list-item/employee-list-item.component';
import { EmployeesComponent } from './employees.component';

@NgModule({
  declarations: [AddressPipe, EmployeesComponent, EmployeeListItemComponent],
  imports: [CommonModule, RouterModule.forChild(employeesRoutes)],
})
export class EmployeesModule {}

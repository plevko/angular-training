import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmployeeListItemComponent } from './employees/employee-list-item/employee-list-item.component';
import { EmployeesComponent } from './employees/employees.component';
import { HelloComponent } from './hello/hello.component';
import { AddressPipe } from './shared/pipes/address.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    EmployeesComponent,
    EmployeeListItemComponent,
    AddressPipe
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

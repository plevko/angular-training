import { MenuComponent } from './menu/menu.component';
import { appRoutes } from './app.routes';
import { HelloListComponent } from './hello/hello-list.component';
import { AlertService } from './alert/alert.service';
import { AlertListComponent } from './alert/alert-list.component';
import { AlertComponent } from './alert/alert.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmployeeListItemComponent } from './employees/employee-list-item/employee-list-item.component';
import { EmployeesComponent } from './employees/employees.component';
import { HelloComponent } from './hello/hello.component';
import { AddressPipe } from './shared/pipes/address.pipe';
import { EmojiAdderDirective } from './shared/directives/emoji-adder.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    EmployeesComponent,
    EmployeeListItemComponent,
    AddressPipe,
    AlertComponent,
    AlertListComponent,
    EmojiAdderDirective,
    HelloListComponent,
    MenuComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [AlertService],
  bootstrap: [AppComponent],
})
export class AppModule {}

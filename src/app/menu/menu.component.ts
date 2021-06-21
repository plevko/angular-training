import { LoginService } from './../shared/login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  constructor(
    private readonly router: Router,
    private readonly loginService: LoginService,
    private readonly translateService: TranslateService
  ) {}

  goToEmployees(): void {
    this.router.navigate(['employees']);
  }

  isRouteActive(): boolean {
    return this.router.isActive('employees', {
      fragment: 'exact',
      matrixParams: 'exact',
      paths: 'exact',
      queryParams: 'exact',
    });
  }

  isUserLoggedIn(): boolean {
   return this.loginService.userLoggedIn; 
  }

  login(): void {
    this.loginService.userLoggedIn = true;
  }

  changeToSk(): void {
    this.translateService.use('sk');
    
  }
  changeToEn(): void {
    this.translateService.use('en-US');
  }
}

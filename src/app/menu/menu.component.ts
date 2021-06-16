import { LoginService } from './../shared/login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  constructor(
    private readonly router: Router,
    private readonly loginService: LoginService
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
}

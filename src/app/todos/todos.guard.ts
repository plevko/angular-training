import { AlertService } from './../alert/alert.service';
import { LoginService } from './../shared/login.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class TodosGuard implements CanActivate {
  constructor(
    private readonly loginService: LoginService,
    private readonly alertService: AlertService
  ) {}

  canActivate(): boolean {
    if (!this.loginService.userLoggedIn) {
      this.alertService.addDangerAlert('Access denied');
    }
    return this.loginService.userLoggedIn;
  }
}

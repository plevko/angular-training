import { LoginService } from './login.service';

describe('LoginService', () => {
  let loginService: LoginService;
  beforeEach(() => {
    loginService = new LoginService();
  });
  it('should have userLoggedIn false as default', () => {
    expect(loginService.userLoggedIn).toBeDefined();
    expect(loginService.userLoggedIn).toBeFalse();
  });

  it('should set userLoggedIn to true after login() method called', () => {
    loginService.login();
    expect(loginService.userLoggedIn).toBeTrue();
  });
});

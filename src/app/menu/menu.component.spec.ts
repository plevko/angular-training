import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from '../shared/login.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { By } from '@angular/platform-browser';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [RouterTestingModule, TranslateModule.forRoot()],
      providers: [LoginService],
    });
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });

  it('should have 5 list items', () => {
    const listItems = fixture.debugElement.queryAll(By.css('li'));
    expect(listItems.length).toEqual(7);
  });

  describe('Login button', () => {
    it(`should call login function`, () => {
      const loginSpy = spyOn(component, 'login');
      const loginButton = fixture.debugElement.queryAll(By.css('button'));

      loginButton[0].nativeElement.click();

      expect(loginSpy).toHaveBeenCalled();
    });
  });
});

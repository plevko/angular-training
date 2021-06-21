import { LoginService } from './shared/login.service';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AlertListComponent } from './alert/alert-list.component';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alert.service';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { HelloListComponent } from './hello/hello-list.component';
import { HelloComponent } from './hello/hello.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmojiAdderModule } from 'capco-shared';

import localeSk from '@angular/common/locales/sk';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeSk);

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HelloListComponent,
    AlertComponent,
    AlertListComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    EmojiAdderModule,
  ],
  providers: [
    AlertService,
    LoginService,
    { provide: LOCALE_ID, useValue: 'sk-SK' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

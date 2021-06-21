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
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

registerLocaleData(localeSk);

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HelloListComponent,
    AlertComponent,
    AlertListComponent,
    MenuComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    EmojiAdderModule,
    TranslateModule.forRoot({
      defaultLanguage: 'sk',
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  })
  ],
  providers: [
    AlertService,
    LoginService,
    { provide: LOCALE_ID, useValue: 'sk' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

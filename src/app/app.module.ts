import { LoginService } from './shared/login.service';
import { NgModule } from '@angular/core';
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
import { EmojiAdderDirective } from './shared/directives/emoji-adder.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HelloListComponent,
    AlertComponent,
    AlertListComponent,
    EmojiAdderDirective,
    MenuComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), BrowserAnimationsModule],
  providers: [AlertService, LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}

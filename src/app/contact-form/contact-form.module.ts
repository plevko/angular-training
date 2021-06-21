import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form.component';
import { contactFormRoutes } from './contact-form.routes';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [ContactFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(contactFormRoutes),
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forChild()
  ],
})
export class ContactFormModule {}

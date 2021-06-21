import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form.component';
import { contactFormRoutes } from './contact-form.routes';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContactFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(contactFormRoutes),
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
})
export class ContactFormModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form.component';
import { contactFormRoutes } from './contact-form.routes';

@NgModule({
  declarations: [ContactFormComponent],
  imports: [CommonModule, RouterModule.forChild(contactFormRoutes)],
})
export class ContactFormModule {}

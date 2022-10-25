import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateNewContactRoutingModule } from './create-new-contact-routing.module';
import { CreateNewContactComponent } from './create-new-contact.component';


@NgModule({
  declarations: [
    CreateNewContactComponent
  ],
  imports: [
    CommonModule,
    CreateNewContactRoutingModule
  ]
})
export class CreateNewContactModule { }

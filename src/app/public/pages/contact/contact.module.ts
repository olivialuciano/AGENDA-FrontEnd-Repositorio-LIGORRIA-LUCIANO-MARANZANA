import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule //entonces este módulo de contacto carga este contactRoutingModule (en contact.module.ts)
    //y este contact-routing.module le dice qué tiene que cargar en la constante routes.
  ]
})
export class ContactModule { }

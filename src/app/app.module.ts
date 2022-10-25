import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './public/components/header/header.component';
import { ContactDetailComponent } from './public/pages/contact-detail/contact-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// SE ACTUALIZÓ APP MODULE PARA DECLARAR EL HEADER COMPONENT
// QUE ACABAMOS DE DECLARAR LO QUE PERMITE QUE LO PODAMOS UTILIZAR

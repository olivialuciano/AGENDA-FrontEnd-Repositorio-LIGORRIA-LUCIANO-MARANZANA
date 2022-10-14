import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './public/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent //ES EL HEADER COMPONENT
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

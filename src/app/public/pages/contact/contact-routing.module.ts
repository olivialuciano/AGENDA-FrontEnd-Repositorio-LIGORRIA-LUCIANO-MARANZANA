import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';


//entonces este módulo de contacto carga este contactRoutingModule (en contact.module.ts)
//y este contact-routing.module le dice qué tiene que cargar en la constante routes.
//entonces vengo y armo una ruta nueva (un objeto)
//el path vacío una vez que estoy acá... se importa el contactCOMPONENT.


const routes: Routes = [
  {
    path: '',
    component : ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }

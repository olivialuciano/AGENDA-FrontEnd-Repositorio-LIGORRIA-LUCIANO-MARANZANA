import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Ahora tenemos que ir al router, el principal, app-rpoting.module.ts
// y decirle qué rutas existen y a dónde me llevan.
// Para eso, vamos a usar esta constante routes que es un array que va a tener todas las rutas.
//Para eso, vamos a copiarnos la sintaxis de cargar módulos con "lazy loading" (https://angular.io/guide/lazy-loading-ngmodules)
//CADA RUTA DE ESTE ARRAY ES UN OBJETO {}.
//este objeto tiene un PATH donde le pongo qué url me va a llevar a qué lugar.
//para el path vacío, yo quiero que vaya al home module.

//le tenemos que decir a nuestro home routing module qué nos va a cargar

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./public/pages/home/home.module').then(m => m.HomeModule)
  },

  //y entonces ahora a contact le tenemos que decir a donde ir
  //entonces en app-routing.module.ts tenemos que crear un path contact que nos lleve a contact
  {
    path: 'contact', //si quiero 1 contacto seria contact/:id xejemplo
    loadChildren: () => import('./public/pages/contact/contact.module').then(m => m.ContactModule)
    //                      importá este módulo,                         y después cargalo.
    // esto es lazy loading. Importa las cosas solo cuando le le pide así evitamos saturar nuestra red.
  },

  {
    path: 'registrarse',
    loadChildren: () => import('./public/pages/registrarse/registrarse.module').then(m => m.RegistrarseModule)
  },
  // {
  //   path: 'contacts',
  //   loadChildren: ()=> import('./public/pages/contact-details/contact-details.module').then(m => m.ContactDetailsModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

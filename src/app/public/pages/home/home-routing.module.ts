import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

//le tenemos que decir a nuestro home routing module qué nos va a cargar
//porque este módulo, nos tiene que cargar, a la vez, un componente.

//ENTONCEEEEEESS: entro a la aplicación en un path vacío (http://localhost:4200/)
//voy a app-routing-module.ts que dice: para un path vacío, cargate módulo de contacto (contact.module.ts)
//entonces este módulo de contacto carga este contactRoutingModule (en contact.module.ts)
//y este contact-routing.module le dice qué tiene que cargar en la constante routes.
//todo está la explicacion en angular lazy loading...
//Hasta ahora perfeeeeecto. Ahora deberíamos hacer alguna navegación para que me funcionen estos links (home y contact).

//A TODO ESTO... en app.component.html tengo el header que cargué antes y luego, en la etiqueta <router-outlet>,
//se va a cargar todo lo que rependa del router.
//o sea que cuando yo me vaya moviendo por el router, el app-header no va a cambiar nunca, sino que 
//va a cambiar lo que pase dentro de router-outlet.

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

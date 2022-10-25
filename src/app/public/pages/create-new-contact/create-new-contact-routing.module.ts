import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewContactComponent } from './create-new-contact.component';

const routes: Routes = [
  {
    path: '',
    component : CreateNewContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateNewContactRoutingModule { }

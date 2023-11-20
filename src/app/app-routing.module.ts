import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajeComponent } from './personaje/personaje.component';

const routes: Routes = [
  {path: '', component: PersonajeComponent},
  {path: 'personajes', component: PersonajeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

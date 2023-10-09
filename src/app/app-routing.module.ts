import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovenyekComponent } from './Part/novenyek/novenyek.component';
import { RendelesComponent } from './Part/rendeles/rendeles.component';
import { UjNovenyComponent } from './Part/uj-noveny/uj-noveny.component';

const routes: Routes = [
  {path:'novenyek', component:NovenyekComponent},
  {path:'rendelesek', component:RendelesComponent},
  {path:'ujnoveny', component:UjNovenyComponent},
  {path:'', component:NovenyekComponent},
  {path:'**', component:NovenyekComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

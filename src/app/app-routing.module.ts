import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NamesComponent } from './names/names.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'names', component:NamesComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Exercice1Component} from './exercice1/exercice1.component';
import {AppComponent} from './app.component';
import {Exercice2Component} from './exercice2/exercice2.component';
import {Exercice3Component} from './exercice3/exercice3.component';
import {Exercice4Component} from './exercice4/exercice4.component';
import {Exercice5Component} from './exercice5/exercice5.component';
import {Exercice6Component} from './exercice6/exercice6.component';
import {Exercice7Component} from './exercice7/exercice7.component';
import {Exercice8Component} from './exercice8/exercice8.component';
import {Exercice9Component} from './exercice9/exercice9.component';
import {BlogComponent} from './blog/blog.component';
import {AuthGuard} from './services/auth-guard.service';
import {Exo8AnimauxComponent} from './exercice8/exo8-animaux/exo8-animaux.component';

const routes: Routes = [
  {path: 'Accueil', component: AppComponent},
  {path: 'Exercice1', canActivate: [AuthGuard], component: Exercice1Component},
  {path: 'Exercice2', component: Exercice2Component},
  {path: 'Exercice3', component: Exercice3Component},
  {path: 'Exercice4', component: Exercice4Component},
  {path: 'Exercice5', component: Exercice5Component},
  {path: 'Exercice6', component: Exercice6Component},
  {path: 'Exercice7', component: Exercice7Component},
  {path: 'Exercice8', component: Exercice8Component},
  {path: 'Exercice8/:id', component: Exo8AnimauxComponent},
  {path: 'Exercice9', component: Exercice9Component},
  {path: 'Blog', component: BlogComponent},
  {path: '403', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

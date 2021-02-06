import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { PanierComponent } from './panier/panier.component';
import { AppareilComponent } from './exercice1/appareil/appareil.component';
import { FormsModule} from '@angular/forms';
import { TableRow1Component } from './table-row1/table-row1.component';
import { Exercice1Component } from './exercice1/exercice1.component';
import { Exercice2Component } from './exercice2/exercice2.component';
import { Exercice3Component } from './exercice3/exercice3.component';
import { Exercice4Component } from './exercice4/exercice4.component';
import { Exercice5Component } from './exercice5/exercice5.component';
import { Exercice6Component } from './exercice6/exercice6.component';
import { Exercice7Component } from './exercice7/exercice7.component';
import { BlogComponent } from './blog/blog.component';
import {PostListComponent} from './blog/post-list/post-list.component';
import { CardGenerator4Component } from './exercice4/card-generator4/card-generator4.component';
import { CardManagerComponent } from './exercice5/card-manager/card-manager.component';
import { TableRow2Component } from './exercice5/table-row2/table-row2.component';
import {AppareilService} from './services/appareil.service';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth-guard.service';
import {IndividuService} from './services/individu.service';
import { TableRow3Component } from './exercice6/table-row3/table-row3.component';
import { InputModifyComponent } from './exercice7/input-modify/input-modify.component';
import {OtherService} from './services/other.service';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    PanierComponent,
    AppareilComponent,
    TableRow1Component,
    Exercice1Component,
    Exercice2Component,
    Exercice3Component,
    Exercice4Component,
    Exercice5Component,
    Exercice6Component,
    Exercice7Component,
    BlogComponent,
    PostListComponent,
    CardGenerator4Component,
    CardManagerComponent,
    TableRow2Component,
    TableRow3Component,
    InputModifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard,
    IndividuService,
    OtherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

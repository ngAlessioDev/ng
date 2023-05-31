import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentiComponent } from './studenti/studenti.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StudenteComponent } from './studenti/studente/studente.component';
import { DocentiComponent } from './docenti/docenti.component';
import { DocenteComponent } from './docenti/docente/docente.component';
import { EditDocenteComponent } from './docenti/edit-docente/edit-docente.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreaStudenteComponent } from './studenti/crea-studente/crea-studente.component';
import { LoginComponent } from './studenti/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentiComponent,
    NavBarComponent,
    StudenteComponent,
    DocentiComponent,
    DocenteComponent,
    EditDocenteComponent,
    PageNotFoundComponent,
    CreaStudenteComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,


  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentiComponent } from './studenti/studenti.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudenteComponent } from './studenti/studente/studente.component';
import { EditStudenteComponent } from './studenti/edit-studente/edit-studente.component';
import { CorsiComponent } from './corsi/corsi.component';
import { CorsoComponent } from './corsi/corso/corso.component';
import { DocentiComponent } from './docenti/docenti.component';
import { DocenteComponent } from './docenti/docente/docente.component';
import { EditDocenteComponent } from './docenti/edit-docente/edit-docente.component';
import { FormsModule } from '@angular/forms';
import { AddStudenteComponent } from './studenti/add-studente/add-studente.component';
import { RegNewStudenteComponent } from './reg-new-studente/reg-new-studente.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentiComponent,
    NavbarComponent,
    StudenteComponent,
    EditStudenteComponent,
    CorsiComponent,
    CorsoComponent,
    DocentiComponent,
    DocenteComponent,
    EditDocenteComponent,
    AddStudenteComponent,
    RegNewStudenteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

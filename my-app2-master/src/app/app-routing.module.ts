import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentiComponent } from './studenti/studenti.component';
import { StudenteComponent } from './studenti/studente/studente.component';
import { DocentiComponent } from './docenti/docenti.component';
import { DocenteComponent } from './docenti/docente/docente.component';
import { EditDocenteComponent } from './docenti/edit-docente/edit-docente.component';
import { CreaStudenteComponent } from './studenti/crea-studente/crea-studente.component';
import { LoginComponent } from './studenti/login/login.component';

const routes: Routes = [
  {
    path: "", component: LoginComponent, children: [
      {
        path: "studenti", component: StudentiComponent, children: [
          { path: ':id/:nome/:corso/:status', component: StudenteComponent }
        ]

      },

      { path: "AddStudent", component: CreaStudenteComponent },
    ]
  },



  //DOCENTI
  {
    path: 'docenti', component: DocentiComponent, children: [
      { path: ':id', component: DocenteComponent },
      { path: ':id/edit', component: EditDocenteComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

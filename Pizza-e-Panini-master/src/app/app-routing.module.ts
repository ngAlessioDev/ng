import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PanineriaComponent } from './panineria/panineria.component';
import { PaninoComponent } from './panineria/panino/panino.component';
import { AddPaninoComponent } from './panineria/add-panino/add-panino.component';
import { PaninoEditComponent } from './panineria/panino/panino-edit/panino-edit.component';
import { PizzeriaComponent } from './pizzeria/pizzeria.component';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "home", component: HomeComponent, canActivate: [authGuard], },


  { path: "panineria", component: PanineriaComponent, canActivate: [authGuard] },
  { path: "panineria/:nome", component: PaninoComponent, canActivate: [authGuard] },
  { path: "addPanino", component: AddPaninoComponent, canActivate: [authGuard] },
  { path: "editPanino/:nome", component: PaninoEditComponent, canActivate: [authGuard] },


  //login
  { path: "", component: LoginComponent, },

  //pizzeria
  { path: "pizzeria", component: PizzeriaComponent, canActivate: [authGuard] },


  { path: "**", component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

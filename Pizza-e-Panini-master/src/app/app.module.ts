import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanineriaComponent } from './panineria/panineria.component';
import { PaniniComponent } from './panineria/panini/panini.component';
import { PaninoComponent } from './panineria/panino/panino.component';
import { PaninoEditComponent } from './panineria/panino/panino-edit/panino-edit.component';
import { AddPaninoComponent } from './panineria/add-panino/add-panino.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { PizzeriaComponent } from './pizzeria/pizzeria.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PanineriaComponent,
    PaniniComponent,
    PaninoComponent,
    PaninoEditComponent,
    AddPaninoComponent,
    HomeComponent,
    PizzeriaComponent,
    LoginComponent,
    PageNotFoundComponent,

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

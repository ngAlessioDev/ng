import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TorneoDetailComponent } from './torneo-detail/torneo-detail.component';
import { GiocatoreComponent } from './giocatore/giocatore.component';
import { SquadraComponent } from './squadra/squadra.component';
import { PartitaComponent } from './partita/partita.component';

@NgModule({
  declarations: [
    AppComponent,
    TorneoDetailComponent,
    GiocatoreComponent,
    SquadraComponent,
    PartitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TorneoDetailComponent } from './torneo-detail/torneo-detail.component';

const routes: Routes = [{ path: '', component: TorneoDetailComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

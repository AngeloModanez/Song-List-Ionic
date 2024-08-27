import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SongDetailsPage } from './song-details.page';

const routes: Routes = [
  {
    path: '',
    component: SongDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongDetailsPageRoutingModule {}

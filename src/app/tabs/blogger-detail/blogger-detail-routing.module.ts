import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloggerDetailPage } from './blogger-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BloggerDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloggerDetailPageRoutingModule {}

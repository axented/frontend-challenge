import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloggerNewPage } from './blogger-new.page';

const routes: Routes = [
  {
    path: '',
    component: BloggerNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloggerNewPageRoutingModule {}

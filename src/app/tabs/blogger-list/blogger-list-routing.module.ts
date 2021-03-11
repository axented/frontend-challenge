import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloggerListPage } from './blogger-list.page';

const routes: Routes = [
  {
    path: '',
    component: BloggerListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloggerListPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'blogger-new',
        loadChildren: () => import('./blogger-new/blogger-new.module').then(m => m.BloggerNewPageModule)
      },
      {
        path: 'blogger-list',
        loadChildren: () => import('./blogger-list/blogger-list.module').then(m => m.BloggerListPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule)
      },
      {
        path: 'blogger-detail',
        loadChildren: () => import('./blogger-detail/blogger-detail.module').then(m => m.BloggerDetailPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }

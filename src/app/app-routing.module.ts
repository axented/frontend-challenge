import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloggersListComponent } from './components/bloggers-list/bloggers-list.component';
import { AddBloggerComponent } from './components/add-blogger/add-blogger.component';
import { BloggerDetailComponent } from './components/blogger-detail/blogger-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BloggersListComponent
  },
  {
    path: 'add-blogger',
    component: AddBloggerComponent
  },
  {
    path: 'blogger-detail/:id',
    component: BloggerDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

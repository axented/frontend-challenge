import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloggersComponent } from './bloggers/bloggers.component';
import { BloggerDetailsComponent } from './blogger-details/blogger-details.component';

const routes: Routes = [
  { path: 'bloggers', component: BloggersComponent },
  { path: 'bloggers/:id', component: BloggerDetailsComponent },
  { path: '', redirectTo: '/bloggers', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
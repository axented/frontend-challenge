import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BloggerListPageRoutingModule } from './blogger-list-routing.module';

import { BloggerListPage } from './blogger-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BloggerListPageRoutingModule
  ],
  declarations: [BloggerListPage]
})
export class BloggerListPageModule {}

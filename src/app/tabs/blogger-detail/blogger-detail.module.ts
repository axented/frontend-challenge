import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BloggerDetailPageRoutingModule } from './blogger-detail-routing.module';

import { BloggerDetailPage } from './blogger-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BloggerDetailPageRoutingModule
  ],
  declarations: [BloggerDetailPage]
})
export class BloggerDetailPageModule {}

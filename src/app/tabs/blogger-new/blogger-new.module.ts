import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BloggerNewPageRoutingModule } from './blogger-new-routing.module';

import { BloggerNewPage } from './blogger-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BloggerNewPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BloggerNewPage]
})
export class BloggerNewPageModule {}

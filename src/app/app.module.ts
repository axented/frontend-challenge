import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BloggerItemComponent } from './blogger/blogger-item/blogger-item.component';
import { BloggerDetailComponent } from './blogger/blogger-detail/blogger-detail.component';

@NgModule({
  declarations: [AppComponent, BloggerItemComponent, BloggerDetailComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

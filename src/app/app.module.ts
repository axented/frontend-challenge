import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BloggersComponent } from './bloggers/bloggers.component';
import { BloggerDetailsComponent } from './blogger-details/blogger-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BloggersComponent,
    BloggerDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

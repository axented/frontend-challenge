import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

import { AppComponent } from './app.component';
import { BloggerItemComponent } from './bloggers/blogger-item/blogger-item.component';
import { BloggerDetailComponent } from './bloggers/blogger-detail/blogger-detail.component';
import { BloggersListComponent } from './bloggers/bloggers-list/bloggers-list.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    BloggerItemComponent,
    BloggerDetailComponent,
    BloggersListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

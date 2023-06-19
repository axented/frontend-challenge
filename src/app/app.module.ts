import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BloggerItemComponent } from './bloggers/blogger-item/blogger-item.component';
import { BloggerDetailComponent } from './bloggers/blogger-detail/blogger-detail.component';
import { BloggersListComponent } from './bloggers/bloggers-list/bloggers-list.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

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
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'bloggers/:bloggerId', component: BloggerDetailComponent },
    ]),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

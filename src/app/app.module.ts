import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { NgSelectModule } from '@ng-select/ng-select';

import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { NavComponent } from './components/nav/nav.component';
import { BloggerComponent } from './components/blogger/blogger.component';
import { BloggersComponent } from './components/bloggers/bloggers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BloggerComponent,
    BloggersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgSelectModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

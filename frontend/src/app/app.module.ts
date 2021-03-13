import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
/*Routing----------------------------------------------*/
import { AppRoutingModule } from './app-routing.module';
/*Reactive Forms---------------------------------------*/
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
/*Components-------------------------------------------*/
import { BloggersComponent } from './components/bloggers/bloggers.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { LostimagePipe } from './pipes/lostimage.pipe';

@NgModule({
    declarations: [
        AppComponent,
        BloggersComponent,
        BuscarComponent,
        CardComponent,
        NavbarComponent,
        ProfileComponent,
        RegisterComponent,
        LostimagePipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }

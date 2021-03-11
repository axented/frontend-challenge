import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*Components--------------------------------------------------*/
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BloggersComponent } from './components/bloggers/bloggers.component';
import { BuscarComponent } from './components/buscar/buscar.component';

const routes: Routes = [
    { path: 'register',           component: RegisterComponent },
    { path: 'list',               component: BloggersComponent },
    /*Params-----------------------------------------------------*/
    { path: 'profile/:id',        component: ProfileComponent },
    { path: 'buscar/:buscarpor',  component: BuscarComponent },
    /*Exception--------------------------------------------------*/
    { path: '**', pathMatch: 'full', redirectTo: 'list' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

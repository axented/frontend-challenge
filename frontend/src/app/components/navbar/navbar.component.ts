import { Component, OnInit } from '@angular/core';
/*Router--------------------------------*/
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

    idPerfilUser : string = '';

    constructor(private router : Router) {
        localStorage.setItem('idUser','0');
        this.Miperfil();
    }

    ngOnInit(): void {
    }

    buscarBlogger(termino:string){    
        this.router.navigate(['/buscar',termino]);
    }
    
    Miperfil(){
        this.idPerfilUser=localStorage.getItem('idUser')+'';
    }
}

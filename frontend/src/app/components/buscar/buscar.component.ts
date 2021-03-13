import { Component, OnInit } from '@angular/core';
/*Router-----------------------------*/
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
/*Service--------------------------- */
import { BloggersService } from '../../services/bloggers.service';

@Component({
    selector: 'app-buscar',
    templateUrl: './buscar.component.html',
    styleUrls: ['./buscar.component.css']
})

export class BuscarComponent implements OnInit {

    bloggers               : any       = {} ;
    termino                : string    = '' ;
    listFriendsAuthUser    : string[]  = [] ;

    constructor(private activatedRoute : ActivatedRoute,
                private _bloggersService : BloggersService,
                private router : Router) {}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe( params => {
            this.termino  = params['buscarpor'];
            this.bloggers = this._bloggersService.buscarBloggers( params['buscarpor'] );
            this.listFriendsAuthUser = this._bloggersService.getArrayFriendsUserAuth('0');
        });
    }
    
    isFriend( idBlogger:string ){

        for (let index = 0; index < this.listFriendsAuthUser.length; index++) {
            if( this.listFriendsAuthUser[index] == idBlogger ){
                return true;
            }
        }

        return false;
    }
    
    vacioObjeto(){
        if( Object.entries( this.bloggers ).length === 0 ){
            return true;
        }else{
            return false;
        }
    }
}

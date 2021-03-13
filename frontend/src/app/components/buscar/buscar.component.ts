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
    searchTearm            : string    = '' ;
    listFriendsAuthUser    : string[]  = [] ;

    constructor(private activatedRoute : ActivatedRoute,
                private _bloggersService : BloggersService,
                private router : Router) {}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe( params => {
            this.searchTearm  = params['search'];
            this.bloggers = this._bloggersService.searchBloggers( params['search'] );
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
    
    emptyObject(){
        if( Object.entries( this.bloggers ).length === 0 ){
            return true;
        }else{
            return false;
        }
    }
}

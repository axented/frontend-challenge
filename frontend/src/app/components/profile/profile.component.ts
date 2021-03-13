import { Component, OnInit } from '@angular/core';
/*ActivatedRouter----------------------------- */
import { ActivatedRoute } from '@angular/router';
/*Service--------------------------------------*/
import { BloggersService } from '../../services/bloggers.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

    blogger:any={};
    friends:any={};
    
    constructor(    private activatedRoute: ActivatedRoute,
                    private _bloggersServices:BloggersService) {
        this.activatedRoute.params.subscribe( params => {
        this.blogger    = this._bloggersServices.getBlogger( params['id'] );
        this.friends    = this._bloggersServices.getFriends( this.blogger.friends );
        });
    }
  
    ngOnInit(): void {    
    }

    showListFriends(){
        return Object.entries(this.friends).length === 0 ;
    }

}

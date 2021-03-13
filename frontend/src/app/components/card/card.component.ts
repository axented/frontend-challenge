import { Component, OnInit,Input,Output } from '@angular/core';
/*Router-------------------------------*/
import { Router } from '@angular/router';
/*Servicio-----------------------------*/
import { BloggersService, BloggerModel } from '../../services/bloggers.service';

@Component({
    selector:     'app-card',
    templateUrl:  './card.component.html',
    styleUrls:    ['./card.component.css']
})

export class CardComponent implements OnInit {

    @Input() blogger       : any     = {};
    @Input() index         : number  = 0;
    @Input() friend        : boolean;

    constructor(    private router : Router ,
                    private _bloggersServices : BloggersService) { }

    ngOnInit(): void {
    }
    
    seeBlogger(){
        this.router.navigate(['/profile',this.index]);        
    }

    addFriend( id:string ){
        this._bloggersServices.addFriend(id);
    }

    deleteFriend( id:string ){
        this._bloggersServices.deleteFriend(id);
    }

    isMyProfile( id:string ){
        let idUserAuth = localStorage.getItem('idUser')+'';
        return idUserAuth == id ? true : false;
    }

}

import { Component, OnInit,Input,Output } from '@angular/core';
/*Router-------------------------------*/
import { Router } from '@angular/router';
/*Servicio-----------------------------*/
import { BloggersService, BloggerModel } from '../../services/bloggers.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

    @Input() blogger       : any     = {};
    @Input() index         : number  = 0;
    @Input() friend        : boolean;

    constructor(    private router : Router ,
                    private _bloggersServices : BloggersService) { }

    ngOnInit(): void {
    }
    
    verBlogger(){
        this.router.navigate(['/profile',this.index]);        
    }

    agregarFriend(id:string){
        this._bloggersServices.addFriend(id);
    }

    eliminarFriend(id:string){
        this._bloggersServices.deleteFriend(id);
    }

}

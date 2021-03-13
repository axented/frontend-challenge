import { Component, OnInit } from '@angular/core';
/*Services----------------*/
import { BloggerModel, BloggersService } from '../../services/bloggers.service';

@Component({
    selector: 'app-bloggers',
    templateUrl: './bloggers.component.html',
    styleUrls: ['./bloggers.component.css']
})

export class BloggersComponent implements OnInit {

    bloggers               : BloggerModel[] = [];
    listFriendsAuthUser    : string[]=[];

    constructor( private _bloggersService : BloggersService ) { }

    ngOnInit(): void {
        this.bloggers = this._bloggersService.getBloggers();
        this.listFriendsAuthUser = this._bloggersService.getArrayFriendsUserAuth('0');
    }

    isFriend(idBlogger:string){

        for (let index = 0; index < this.listFriendsAuthUser.length; index++) {
            if( this.listFriendsAuthUser[index] == idBlogger ){
                return true;
            }
        }

        return false;
    }
}

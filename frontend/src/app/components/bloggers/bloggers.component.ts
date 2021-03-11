import { Component, OnInit } from '@angular/core';
/*Services----------------*/
import { BloggerModel, BloggersService } from '../../services/bloggers.service';

@Component({
    selector: 'app-bloggers',
    templateUrl: './bloggers.component.html',
    styleUrls: ['./bloggers.component.css']
})

export class BloggersComponent implements OnInit {

    bloggers : BloggerModel[] = [];

    constructor( private _bloggersService : BloggersService ) { }

    ngOnInit(): void {
        this.bloggers = this._bloggersService.getBloggers();
    }

}

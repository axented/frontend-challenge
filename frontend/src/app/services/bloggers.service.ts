import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BloggersService {

    private DataBloggers : BloggerModel[]=
    [
        {
            id:             "1",
            name:           "Juan Perez",
            website:        "juanperez.io",
            picture_url:    "https://placekitten.com/200/300",
            email:          "conact@juanperez.io",
            friends:        []
        },
        {
            id:             "2",
            name:           "Amano Pikamee",
            website:        "pikamee.io",
            picture_url:    "https://placekitten.com/200/300",
            email:          "contact@pikamee.io",
            friends:        ["1"]
        },
        {
            id:             "3",
            name:           "Tony Stark",
            website:        "tonystark.io",
            picture_url:    "https://placekitten.com/200/300",
            email:          "contact@tonystark.io",
            friends:        ["1", "2"]
        }
    ];

    constructor() {}

    getBloggers() : BloggerModel[] {
        return this.DataBloggers;
    }

}


export interface BloggerModel{
    id:              string;
    name:            string;
    website:         string;
    picture_url:     string;
    email:           string;
    friends:         string[];
    idx?:            number;
}

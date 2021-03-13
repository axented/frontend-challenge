import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class BloggersService {

    private DataBloggers : BloggerModel[]=
    [
        {
            id: "0",//Simulacion de usuario Logueado
            name: "Luis Juarez",
            website: "luisjuares.io",
            picture_url: "https://img.freepik.com/foto-gratis/hombre-guapo-caucasico-aislado-pared-beige-dando-gesto-pulgares-arriba_1368-92335.jpg?size=626&ext=jpg",
            email: "conact@luisjuares.io",
            friends: ["3","4"]
        },{
            id: "1",
            name: "Juan Perez",
            website: "juanperez.io",
            picture_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/camiseta-blanca-hombre-getty-1553624255.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=640:*",
            email: "conact@juanperez.io",
            friends: []
        },
        {
            id: "2",
            name: "Amano Pikamee",
            website: "pikamee.io",
            picture_url: "https://i.redd.it/7w0pycn2ib451.jpg",
            email: "contact@pikamee.io",
            friends: ["1"]
        },
        {
            id: "3",
            name: "Tony Stark",
            website: "tonystark.io",
            picture_url: "https://images.clarin.com/1969/12/31/robert-downey-jr-ejercio-los___H1xylv8RXg_1256x620__1.jpg",
            email: "contact@tonystark.io",
            friends: ["1", "2"]
        },{
            id: "4",
            name: "Ibai",
            website: "ibai.io",
            picture_url: "https://media.vozpopuli.com/2021/02/Ibai-Llanos-mundo-habla-ahora_1369373105_15343944_1200x675.jpg",
            email: "contact@ibai.io",
            friends: ["7", "8","9","2","0"]
        },{
            id: "5",
            name: "Wanda maximoff",
            website: "wanda.io",
            picture_url: "http://pm1.narvii.com/6601/43be66544ff4327187cc626851c134cedd58f96f_00.jpg",
            email: "contact@wanda.io",
            friends: ["9", "2","3","4"]
        },{
            id: "6",
            name: "Sara",
            website: "bjean.io",
            picture_url: "https://img.wattpad.com/cover/241150647-288-k206830.jpg",
            email: "contact@bjean.io",
            friends: ["4", "3","2"]
        },{
            id: "7",
            name: "Steve",
            website: "steve.io",
            picture_url: "https://sm.ign.com/ign_es/screenshot/default/chris-evans-capitan-america-4514_huvv.jpg",
            email: "contact@steve.io",
            friends: ["3", "8","9"]
        },{
            id: "8",
            name: "Violetta",
            website: "violetta.io",
            picture_url: "https://i.pinimg.com/originals/33/3a/7c/333a7c35fab65765537627702f0098e9.jpg",
            email: "contact@violetta.io",
            friends: ["1", "4"]
        },{
            id: "9",
            name: "Daniel",
            website: "daniel.io",
            picture_url: "",
            email: "contact@daniel.io",
            friends: ["5", "8"]
        }
    ];

    constructor() {}

    getBloggers() : BloggerModel[] {
        return this.DataBloggers;
    }
    
    getBlogger( idx:number ){
        return this.DataBloggers[idx];
    }

    getFriends( idFriends:string[] ){
        let friendsBlogger : BloggerModel[] = [];

            for (let indexBuscar = 0; indexBuscar < idFriends.length; indexBuscar++) {
                for (let indexBlogger = 0; indexBlogger < this.DataBloggers.length; indexBlogger++) {
                    
                    let idFriend        = idFriends[indexBuscar];
                    let idJsonBloggers  = this.DataBloggers[indexBlogger];

                    if( idFriend == idJsonBloggers.id ){
                        friendsBlogger.push( idJsonBloggers );
                    }
                }
            }

        return friendsBlogger;
    }
    
    getArrayFriendsUserAuth( ids:string ){
        let arrayFriendsAuth    :string[] = [];
        let idFriend            :string[] = [];

        for (let index = 0; index < this.DataBloggers.length; index++) {
            if( ids == this.DataBloggers[index].id){
                return this.DataBloggers[index].friends;
            }
        }
        return [];
    }

    searchBloggers( search:string ){        
        let bloggerArray : BloggerModel[] = [];
        search = search.toLowerCase();
    
        for(let i = 0 ; i < this.DataBloggers.length ; i++){
    
            let blogger = this.DataBloggers[i];
            let name  = blogger.name.toLowerCase();
    
            if( name.indexOf(search) >= 0){
                blogger.idx = i;
                bloggerArray.push( blogger );
            }else{
                let website = blogger.website.toLowerCase();

                if ( website.indexOf(search) >= 0 ) {
                    blogger.idx = i;
                    bloggerArray.push( blogger );
                }
            }
        }      
        
        return bloggerArray;
    }
    
    pushBlogger( dataNewUser:BloggerModel ){
        dataNewUser.id     = this.DataBloggers.length - 1 + '';
        let datosuser      = dataNewUser;

        this.DataBloggers.push(datosuser);
    }

    addFriend( id:string ){
        this.DataBloggers[Number(localStorage.getItem('idUser'))].friends.push(id);
    }

    deleteFriend( id:string ){
        let posicion = this.DataBloggers[Number(localStorage.getItem('idUser'))].friends.indexOf(id);
        this.DataBloggers[Number(localStorage.getItem('idUser'))].friends.splice(posicion,1);
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

import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  developer: {
    name: string;
    email: string;
    codeLanguajes: string[];
  } | undefined

  selectedBlogger: {
    id: number;
    name: string;
    website: string;
    picture_url: string;
    email: string;
    friends: string[];
  } | null = null;

  bloggersData = [
    {
      id: 1,
      name: "Juan Perez",
      website: "juanperez.io",
      picture_url: "https://placekitten.com/200/300",
      email: "contact@juanperez.io",
      friends: []
    },
    {
      id: 2,
      name: "Amano Pikamee",
      website: "pikamee.io",
      picture_url: "https://placekitten.com/200/300",
      email: "contact@pikamee.io",
      friends: ["1"]
    },
    {
    id: 3,
    name: "Tony Stark",
    website: "tonystark.io",
    picture_url: "https://placekitten.com/200/300",
    email: "contact@tonystark.io",
    friends: ["1", "2"]
    }
  ];

  selectedFriends: string[] = [];

  newBlogger = {
    name: '',
    website: '',
    picture_url: '',
    email: ''
  };

  constructor() {
    this.selectedBlogger = this.bloggersData[0];
  }

  updateSelectedBlogger(selectedId: number): void {
    const blogger = this.bloggersData.find(b => b.id === selectedId);
    this.selectedBlogger = blogger ? blogger : {
      id: 0,
      name: 'Seleccionar Blogger',
      website: '',
      picture_url: '',
      email: '',
      friends: []
    };
  }

  getFriendName(friendId: string): string {
    const friend = this.bloggersData.find(blogger => blogger.id.toString() === friendId);
    return friend ? friend.name : 'Desconocido';
  } 

  getFriendsNames(friendsIds: string[]): string[] {
    const friendNames: string[] = [];
    friendsIds.forEach(friendId => {
      const friend = this.bloggersData.find(blogger => blogger.id.toString() === friendId);
      if (friend) {
        friendNames.push(friend.name);
      }
    });
    return friendNames;
  }

  crearNuevoBlogger() {

    this.newBlogger = {
      name: '',
      website: '',
      picture_url: '',
      email: ''
    };

    this.developer = {
      name: "Luis Moreno",
      email: "luiszelph.morenoruiz@gmail.com",
      codeLanguajes: ["C#", "Javascript", "HTML", "CSS", "SQL" ]
    }
  }

  agregarBlogger() {

    if (!this.newBlogger.name || !this.newBlogger.email || !this.newBlogger.website || !this.newBlogger.picture_url) {

      alert('Por favor, complete todos los campos antes de agregar un nuevo blogger.');
      return;
    }

    const cantidadBloggers = this.bloggersData.length;
    const nuevoID = cantidadBloggers + 1;

    const nuevoBlogger = {
      id: nuevoID,
      name: this.newBlogger.name,
      email: this.newBlogger.email,
      website: this.newBlogger.website,
      picture_url: this.newBlogger.picture_url,
      friends: this.selectedFriends.map(id => id.toString())
    };

    this.bloggersData.push(nuevoBlogger);

    this.newBlogger = {
      name: '',
      email: '',
      website: '',
      picture_url: ''
    };
  }



}

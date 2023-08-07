import { Injectable } from '@angular/core';

export interface Blogger {
  id: string;
  name: string;
  website: string;
  picture_url: string;
  email: string;
  friends: string[];
}


@Injectable({
  providedIn: 'root'
})
export class BloggerService {
  bloggers = [
    {
      id: "1",
      name: "Juan Perez",
      website: "juanperez.io",
      picture_url: "https://placekitten.com/200/300",
      email: "contact@juanperez.io",
      friends: []
    },
    {
      id: "2",
      name: "Amano Pikamee",
      website: "pikamee.io",
      picture_url: "https://placekitten.com/200/300",
      email: "contact@pikamee.io",
      friends: ["1"]
    },
    {
      id: "3",
      name: "Tony Stark",
      website: "tonystark.io",
      picture_url: "https://placekitten.com/200/300",
      email: "contact@tonystark.io",
      friends: ["1", "2"]
    }
  ];

  getBloggers() {
    return this.bloggers;
  }

  getBlogger(id: string) {
    return this.bloggers.find(blogger => blogger.id === id);
  }

  addFriend(bloggerId: string, friendId: string) {
    const blogger = this.bloggers.find(b => b.id === bloggerId);
    if (blogger) {
      blogger.friends.push(friendId);
    }
  }
}
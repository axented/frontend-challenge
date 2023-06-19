import { Component } from '@angular/core';
import { Blogger } from './models/blogger.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bloggers';

  selectedBlogger?: Blogger;

  addBloggerActive = false;

  bloggers: Blogger[] = [
    {
      id: '1',
      name: 'Juan Perez',
      website: 'juanperez.io',
      picture_url: 'https://placekitten.com/200/200',
      email: 'conact@juanperez.io',
      friends: [],
    },
    {
      id: '2',
      name: 'Amano Pikamee',
      website: 'pikamee.io',
      picture_url: 'https://placekitten.com/200/200',
      email: 'contact@pikamee.io',
      friends: ['1'],
    },
    {
      id: '3',
      name: 'Tony Stark',
      website: 'tonystark.io',
      picture_url: 'https://placekitten.com/200/200',
      email: 'contact@tonystark.io',
      friends: ['1', '2'],
    },
  ];

  selectCurrentBlogger(blogger: Blogger) {
    this.selectedBlogger = blogger;
  }

  showForm() {
    this.addBloggerActive = true;
  }
}

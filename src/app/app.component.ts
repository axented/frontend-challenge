import { Component, OnInit } from '@angular/core';

import { FirestoreService } from './services/firestore/firestore.service';

import { Blogger } from './models/blogger.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'bloggers';

  selectedBlogger?: Blogger;

  bloggers: Blogger[] = [];

  constructor(private firestoreService: FirestoreService) {}

  async ngOnInit() {
    await this.firestoreService.getBloggers().then((bloggersSnapshot: any) => {
      bloggersSnapshot.forEach((bloggerData: any) => {
        this.bloggers.push({
          id: bloggerData.id,
          ...bloggerData.data(),
        });
      });
    });
  }

  selectCurrentBlogger(blogger: Blogger) {
    this.selectedBlogger = blogger;
  }

  async createBlogger() {
    await this.firestoreService
      .createBlogger({
        name: 'Tony Stark',
        website: 'tonystark.io',
        picture_url: 'https://placekitten.com/200/200',
        email: 'contact@tonystark.io',
      })
      .then((value) => console.log(value));
  }
}

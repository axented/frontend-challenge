import { Component, OnInit } from '@angular/core';
import { FirestoreService } from './services/firestore/firestore.service';

import { Blogger } from './models/blogger.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'bloggers';

  selectedBlogger?: Blogger;
  selectedBloggerIndex?: number;

  bloggers: Blogger[] = [];

  showForm = false;

  bloggerFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    website: new FormControl('', Validators.required),
    picture_url: new FormControl('', Validators.required),
  });

  constructor(private firestoreService: FirestoreService) {}

  async ngOnInit() {
    this.loadBloggers();
  }

  async createBlogger() {
    let newBlogger = {
      id: '',
      friends: [],
      ...(this.bloggerFormGroup.value as {
        name: string;
        website: string;
        email: string;
        picture_url: string;
      }),
    };

    await this.firestoreService.createBlogger(newBlogger).then(
      (value) => {
        this.bloggerFormGroup.reset();

        this.bloggers.push({ ...newBlogger, id: value });

        this.showForm = false;

        console.log('Created blogger');
      },
      (error) => console.log(error),
    );
  }

  selectCurrentBlogger(blogger: Blogger, index: number) {
    this.selectedBlogger = blogger;
    this.selectedBloggerIndex = index;
  }

  deleteBlogger(bloggerId: string) {
    this.bloggers = this.bloggers.filter((obj) => bloggerId !== obj.id);

    this.selectedBlogger = undefined;
    this.selectedBloggerIndex = undefined;
  }

  async updateBloggerFriends(newFriends: string[]) {
    if (this.selectedBloggerIndex !== undefined)
      this.bloggers[this.selectedBloggerIndex].friends = newFriends;

    await this.firestoreService
      .updateBlogger(this.bloggers[this.selectedBloggerIndex as number])
      .then(
        (_) => {
          console.log(newFriends);
          console.log('Updated friends');
        },
        (error) => console.log(error),
      );
  }

  async loadBloggers() {
    await this.firestoreService.getBloggers().then((bloggersSnapshot: any) =>
      bloggersSnapshot.forEach((bloggerData: any) => {
        this.bloggers.push({
          id: bloggerData.id,
          ...bloggerData.data(),
        });
      }),
    );
  }
}

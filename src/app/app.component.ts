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

  bloggers: Blogger[] = [];

  constructor(private firestoreService: FirestoreService) {}

  bloggerFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    website: new FormControl('', Validators.required),
    picture_url: new FormControl('', Validators.required),
  });

  async ngOnInit() {
    this.loadBloggers();
  }

  async createBlogger() {
    let newBlogger = {
      id: '',
      name: this.bloggerFormGroup.value.name as string,
      website: this.bloggerFormGroup.value.website as string,
      picture_url: this.bloggerFormGroup.value.picture_url as string,
      email: this.bloggerFormGroup.value.email as string,
      friends: [],
    };

    await this.firestoreService.createBlogger(newBlogger).then(
      (value) => {
        this.bloggerFormGroup.reset();

        this.bloggers.push({ ...newBlogger, id: value });

        console.log('Created blogger');
      },
      (error) => console.log(error),
    );
  }

  selectCurrentBlogger(blogger: Blogger) {
    this.selectedBlogger = blogger;
  }

  deleteBlogger(bloggerId: string) {
    this.bloggers = this.bloggers.filter((obj) => bloggerId !== obj.id);
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

import { Component, OnInit } from '@angular/core';
import { Blogger, BloggerService } from '../blogger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bloggers',
  templateUrl: './bloggers.component.html',
  styleUrls: ['./bloggers.component.css']
})
export class BloggersComponent implements OnInit {
  bloggers: Blogger[] = [];
  newBlogger: Blogger = {
    id: '',
    name: '',
    website: '',
    picture_url: '',
    email: '',
    friends: []
  };

  constructor(
    private router: Router,
    private bloggerService: BloggerService
    ) { }

  ngOnInit() {
    this.bloggers = this.bloggerService.getBloggers();
  }

  addBlogger() {
    // Generate a unique id (you can use a library or other methods to ensure uniqueness)
    this.newBlogger.id = String(Date.now());

    // Add the new blogger to the list
    this.bloggers.push(this.newBlogger);

    // Reset the form
    this.newBlogger = {
      id: '',
      name: '',
      website: '',
      picture_url: '',
      email: '',
      friends: []
    };
  }

  navigateToDetails(bloggerId: string) {
    console.log('Button clicked for blogger:', bloggerId);
  this.router.navigate(['bloggers', bloggerId]);
  }

}
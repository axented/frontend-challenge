import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { BloggerService, Blogger } from '../blogger.service';

@Component({
  selector: 'app-blogger-details',
  templateUrl: './blogger-details.component.html',
  styleUrls: ['./blogger-details.component.css']
})
export class BloggerDetailsComponent implements OnInit {
  blogger: Blogger | null = null;

  constructor(
    private route: ActivatedRoute,
    private bloggerService: BloggerService
  ) { }

  ngOnInit() {
    const bloggerId = this.route.snapshot.paramMap.get('id');
    if (bloggerId) {
      this.blogger = this.bloggerService.getBlogger(bloggerId) as Blogger; // Explicitly cast the result
    }
  }

  addFriend(friendId: string) {
    if (this.blogger) {
      this.bloggerService.addFriend(this.blogger.id, friendId);
    }
  }
}
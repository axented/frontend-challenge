import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Blogger } from 'src/app/shared/models/blogger';

@Component({
  selector: 'app-blogger-detail',
  templateUrl: './blogger-detail.component.html',
  styleUrls: ['./blogger-detail.component.scss']
})
export class BloggerDetailComponent implements OnInit {
  private router = inject(Router);
  private _activatedRoute = inject(ActivatedRoute);
  public BloggerSelected: Blogger = new Blogger();
  private bloggers: Blogger[] = [];
  public friends: number[] = [];
  public potentialFriends: Blogger[] = [];



  public formBloggerGroup: FormGroup = new FormGroup({
    nameControl: new FormControl('', Validators.required),
    websiteControl: new FormControl('', Validators.required),
    pictureUrlControl: new FormControl('', Validators.required),
    emailControl: new FormControl('', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")),
    friendControl: new FormControl('')
  });

  /**
   *
   */
  constructor() {
    this._activatedRoute.params.subscribe(params => {
      let id: number = params["id"];
      this.BloggerSelected = this.getBloggerById(id);
      this.setForm();
      this.getFriends();
    });
  }

  ngOnInit() {
    let sameBlogger = this.bloggers.find(b => b.id == this.BloggerSelected.id);
    this.potentialFriends = this.bloggers.filter(b => b != sameBlogger);
  }

  getFriends() {
    let tmpBlogger: Blogger;
    if (this.BloggerSelected.friends != undefined) {
      this.BloggerSelected.friends.map(friendId => {
        tmpBlogger = this.getBloggerById(friendId);
        this.friends.push(tmpBlogger.id);
        this.formBloggerGroup.get('friendControl').setValue(this.friends);
      });
    }
  }

  back() {
    this.router.navigate(['']);
  }

  private getBloggerById(id: number): Blogger {
    this.getBloggers();
    let blogger = this.bloggers.find(b => b.id == id);
    return blogger;
  }

  private setForm() {
    this.formBloggerGroup.get('nameControl').setValue(this.BloggerSelected.name);
    this.formBloggerGroup.get('websiteControl').setValue(this.BloggerSelected.website);
    this.formBloggerGroup.get('pictureUrlControl').setValue(this.BloggerSelected.picture_url);
    this.formBloggerGroup.get('emailControl').setValue(this.BloggerSelected.email);
  }

  onSave() {
    this.BloggerSelected.friends = this.friends;
    this.bloggers.map(b => {
      if (this.BloggerSelected.id == b.id) {
        b.friends = this.BloggerSelected.friends;
      }
    });
    localStorage.setItem('bloggers', JSON.stringify(this.bloggers));
    this.router.navigate(['']);
  }

  private getBloggers() {
    this.bloggers = JSON.parse(localStorage.getItem('bloggers'));
    if (this.bloggers == null || this.bloggers == undefined) {
      this.bloggers = [];
    }
  }

  onChange(event: any) {
    this.friends = event.value;
  }
}

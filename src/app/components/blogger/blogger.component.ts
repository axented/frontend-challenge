import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Blogger } from 'src/app/models/blogger.model';

@Component({
  selector: 'app-blogger',
  templateUrl: './blogger.component.html',
  styleUrls: ['./blogger.component.scss']
})
export class BloggerComponent {
  @Input() blogger: Blogger = {
    id: '',
    name: '',
    website: '',
    picture_url: '',
    email: '',
    friends: []
  };
  @Output() showBlogger = new EventEmitter<Blogger>();
  @Output() deleteBlogger = new EventEmitter<string>();

  onShowDetail() {
    this.showBlogger.emit(this.blogger);
  }

  onDeleteBlogger() {
    this.deleteBlogger.emit(this.blogger.id);
  }
}

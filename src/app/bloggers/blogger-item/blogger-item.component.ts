import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blogger } from 'src/app/models/blogger.model';

@Component({
  selector: 'app-blogger-item',
  templateUrl: './blogger-item.component.html',
  styleUrls: ['./blogger-item.component.css'],
})
export class BloggerItemComponent {
  @Input() blogger?: Blogger;

  @Output() bloggerEmitter = new EventEmitter<Blogger>();

  emitBlogger() {
    this.bloggerEmitter.emit(this.blogger);
  }
}

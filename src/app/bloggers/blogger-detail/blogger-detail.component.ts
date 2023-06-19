import { Component, Input } from '@angular/core';
import { Blogger } from '../../models/blogger.model';

@Component({
  selector: 'app-blogger-detail',
  templateUrl: './blogger-detail.component.html',
  styleUrls: ['./blogger-detail.component.css'],
})
export class BloggerDetailComponent {
  @Input() blogger?: Blogger;
}

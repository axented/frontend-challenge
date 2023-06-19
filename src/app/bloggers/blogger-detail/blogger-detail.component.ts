import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

import { Blogger } from '../../models/blogger.model';

@Component({
  selector: 'app-blogger-detail',
  templateUrl: './blogger-detail.component.html',
  styleUrls: ['./blogger-detail.component.css'],
})
export class BloggerDetailComponent {
  @Input() blogger?: Blogger;
  @Input() bloggers?: Blogger[];

  @Output() deleteEmitter = new EventEmitter<string>();

  constructor(private firestoreService: FirestoreService) {}

  deleteBlogger() {
    if (this.blogger?.id) {
      this.firestoreService.deleteBlogger(this.blogger?.id).then(
        (_) => {
          this.deleteEmitter.emit(this.blogger?.id);

          console.log('Deleted user');
        },
        (error) => console.log(error),
      );
    }
  }
}

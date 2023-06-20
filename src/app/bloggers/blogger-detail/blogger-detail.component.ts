import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

import { Blogger } from '../../models/blogger.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blogger-detail',
  templateUrl: './blogger-detail.component.html',
  styleUrls: ['./blogger-detail.component.css'],
})
export class BloggerDetailComponent {
  @Input() blogger?: Blogger;
  @Input() bloggers?: Blogger[];

  @Output() deleteEmitter = new EventEmitter<string>();
  @Output() newFriendsEmitter = new EventEmitter<string[]>();

  constructor(private firestoreService: FirestoreService) {}

  updateFriends(event: any) {
    if (!this.blogger) return;

    let friendId = event.target.id;

    let newFriends = this.blogger.friends;

    if (event.target.checked) {
      newFriends.push(friendId);
    } else {
      newFriends = newFriends.filter((id) => id !== friendId);
    }

    this.newFriendsEmitter.emit(newFriends);
  }

  deleteBlogger() {
    if (this.blogger?.id !== undefined) {
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

import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  getDoc,
} from '@angular/fire/firestore';

import { Blogger } from 'src/app/models/blogger.model';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  collectionName = 'bloggers';

  public async createBlogger(blogger: Blogger) {
    const bloggerRef = collection(this.firestore, this.collectionName);

    let bloggerId = doc(bloggerRef).id;

    return (
      await setDoc(doc(this.firestore, this.collectionName, bloggerId), {
        ...blogger,
        id: bloggerId,
        friends: [],
      }),
      bloggerId
    );
  }

  public async updateBlogger(blogger: Blogger) {
    return await setDoc(
      doc(this.firestore, this.collectionName, blogger.id),
      blogger,
    );
  }

  public async deleteBlogger(bloggerId: string) {
    return await deleteDoc(doc(this.firestore, this.collectionName, bloggerId));
  }

  public async getBlogger(blogger: Blogger) {
    return await getDoc(doc(this.firestore, this.collectionName, blogger.id));
  }

  public async getBloggers() {
    return await getDocs(collection(this.firestore, this.collectionName));
  }
}

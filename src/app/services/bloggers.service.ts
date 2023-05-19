import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Blogger } from '../models/blogger.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloggersService {

  constructor(private firestore: Firestore) { }

  addBlogger(blogger: Blogger) {
    const bloggerRef = collection(this.firestore, 'bloggers');
    return addDoc(bloggerRef, blogger);
  }

  updateBlogger(id: string, blogger: Blogger) {
    const bloggerRef = doc(this.firestore, `bloggers/${id}`);
    return updateDoc(bloggerRef, { ...blogger });
  }

  getBloggers(): Observable<Blogger[]> {
    const bloggerRef = collection(this.firestore, 'bloggers');
    return collectionData(bloggerRef, { idField: 'id' }) as Observable<Blogger[]>;
  }

  deleteBlogger(id: string) {
    const bloggerRef = doc(this.firestore, `bloggers/${id}`);
    return deleteDoc(bloggerRef);
  }
}

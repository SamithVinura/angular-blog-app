import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  updateDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private firestore: Firestore) {}

  loadData() {
    const collectionIns = collection(this.firestore, 'posts');
    return collectionData(collectionIns, { idField: 'id' });
  }

  updatePostViews(id: string, updateData: any) {
    const docIns = doc(this.firestore, 'posts', id);
    updateDoc(docIns, updateData)
      .then((docRef) => {})
      .catch((err) => {
        console.log(err);
      });
  }
}

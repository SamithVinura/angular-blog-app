import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class SubscribersService {
  constructor(private firestore: Firestore) {}

  addSubs(data: any) {
    const collectionIns = collection(this.firestore, 'subscribers');
    addDoc(collectionIns, data)
      .then((docRef) => {
      })
      .catch((err) => {
        console.log('error');
      });
  }

  loadAllSubs() {
    const collectionIns = collection(this.firestore, 'subscribers');
    return collectionData(collectionIns, { idField: 'id' });
  }
}

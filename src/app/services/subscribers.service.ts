import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  updateDoc,
  deleteDoc,
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
        /* this.toaster.success('Data Insert Successfully') */
      })
      .catch((err) => {
        console.log('error');
      });
  }

 /*  checkSubs(subEmail: any):any {
    this.loadAllSubs().subscribe((subs) => {
      const found = subs.find((sub) => {
        return sub['email'] === subEmail;

      });
      console.log("yy",found)
    return found

    }); */


  loadAllSubs() {
    const collectionIns = collection(this.firestore, 'subscribers');
    return collectionData(collectionIns, { idField: 'id' });
  }
}

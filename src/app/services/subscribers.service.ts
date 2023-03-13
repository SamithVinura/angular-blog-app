import { Injectable } from '@angular/core';
import {
  Firestore,
  collection, addDoc,collectionData,doc,updateDoc,deleteDoc

} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private firestore:Firestore) { }

  addSubs(data:any){
     const collectionIns = collection(this.firestore, 'subscribers');
    addDoc(collectionIns, data)
      .then((docRef) => {
        /* this.toaster.success('Data Insert Successfully') */
      })
      .catch((err) => {
        console.log('error');
      });
  }
}

import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,

} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private firestore: Firestore) { }

  loadData(){
    const collectionIns = collection(this.firestore, 'posts');
    return collectionData(collectionIns,{idField:'id'})
  }
}

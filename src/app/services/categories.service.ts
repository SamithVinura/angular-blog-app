import { Injectable } from '@angular/core';
import { Firestore, collection,collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private firestore: Firestore) { }

  loadData(){
    const collectionIns = collection(this.firestore, 'categories');
    return collectionData(collectionIns,{idField:'id'})
  }
}

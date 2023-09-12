import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, doc } from '@angular/fire/firestore';
import { LocalstoreService } from './localstore.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private fire : Firestore,
    private localstore: LocalstoreService,
  ) { }
    //Initialisation of firestore variables 
    dbrefUsers = collection(this.fire, 'Users');
    dbref = collection(this.fire, 'ConfirmedUsers');
    docRef = doc(this.dbref, this.localstore.get('User').data['email']);
    newsSubcol = collection(this.docRef, "My_News")
    requestCollection = collection(this.fire, 'Match_Request');

  createNews(param:object){
    addDoc(this.newsSubcol,param)
    .then(result =>{
      console.log('doc submitted');
      
    })
  }
}

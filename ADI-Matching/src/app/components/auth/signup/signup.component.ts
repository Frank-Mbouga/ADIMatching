import { Component } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { Firestore, addDoc, collection, deleteDoc, doc, getDocs } from '@angular/fire/firestore';
import { LocalstoreService } from 'src/app/services/localstore.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private users: UserService,private fire:Firestore,private store:LocalstoreService) { }
   dbRef = collection(this.fire,"Users");
  User: IUser= {
    Username: '',
    email: '',
    password: '',
    id: 0
  }

  async Submit(e:any,user:IUser){
    this.users.signUp(user);
    addDoc(this.dbRef,user);
     let doc = await getDocs(this.dbRef);
    let mydocindex = doc.size-1;
    console.log(mydocindex); 
  }
   googleAuth(e:any,user:any){
    this.users.google();
    const deegr = this.store.get('User').data;
    const dara = {
      Username: deegr.Name,
      email: deegr.email,
      id: 0
    }
    addDoc(this.dbRef,dara);
   
    
  }
}

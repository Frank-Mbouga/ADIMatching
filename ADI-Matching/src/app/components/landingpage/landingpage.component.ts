import { Component, OnInit } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { LocalstoreService } from 'src/app/services/localstore.service';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {
requests:Array<object>=[]
  users!:any
  allRequesters = []


  loginCredits!: object;
  getcrumb!: string

  notifications: any[] = [];//setting an array of notifications to an empty array

  getCrumb(e: any): string {
    this.getcrumb = e;
    return this.getcrumb;
  };

  constructor(
    private localstore: LocalstoreService,
    private matchservice: MatchService,
    private fire: Firestore,

  ) {
    matchservice.emmitLogins.subscribe(data => {
      this.loginCredits = data;
      

    })
    getDocs(this.dbrefUsers)
    .then(result =>{
      return  result.docs.filter(match =>{
        if(      match.data()['email'] === this.localstore.get('User').data['email'] ){
          this.localstore.set('UserId',{
            id:match.id
          })
        } 
      
      }) 

    })

     matchservice.emmitMR.subscribe(data=>{
      
      this.requests = data
    })

    matchservice.getRequesters(this.requests)
  }
  
  dbrefUsers = collection(this.fire, 'Users');
  requestCollection = collection(this.fire, 'Match_Request');

  ngOnInit(): void {
    (async () => {
      const finalResult = await this.getFirestoreObjects(this.dbrefUsers);
      this.matchservice.getMatches(finalResult.map(data=>{return{data:data.data(),id:data.id}}));
      
    })()

      try {

        (async () => {
          const request = await this.getFirestoreMatchRequest(this.requestCollection);
          this.matchservice.getMR(request.map(data =>{
            return{data:data.data()}
          }))
        })()

    } catch (error) {
      console.log(error);
    }

    if (this.localstore.get('User').status == true) {
      const result = this.getInfoFromLocalStorage();
      this.matchservice.getLogins(result);
    }

  }

  async getFirestoreObjects(collection: any) {
    const result = await getDocs(collection);
    return result.docs.filter((match:any)=>{
     return match.data().email != this.localstore.get('User').data['email'];
    })
  }

  getInfoFromLocalStorage(): object {
    return this.localstore.get('User').data;
  }

  async getFirestoreMatchRequest(collection: any) {
    const MRResult = await getDocs(collection);
    return MRResult.docs.filter((match: any) => {
       return match.data().recipientId === this.localstore.get('UserId').data['id'];
      })
  }
}

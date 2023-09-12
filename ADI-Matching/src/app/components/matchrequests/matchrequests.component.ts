import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { MatchService } from 'src/app/services/match.service';
@Component({
  selector: 'app-matchrequests',
  templateUrl: './matchrequests.component.html',
  styleUrls: ['./matchrequests.component.scss']
})
export class MatchrequestsComponent {
  requests:Array<object>=[]
  users!:any
  allRequesters = []

  constructor(
    private matchservice:MatchService,
    private fire:Firestore
  ){
    matchservice.emmitMR.subscribe(data=>{
      
      this.requests = data
    })
    matchservice.emmitMatches.subscribe(data=>{
      this.users = data
      
    })
    

  }
dbrefUsers = (this.fire,'Users')
docref = (this.dbrefUsers)

  ngOnInit(): void {
   this.allRequesters = this.getRequester()
  }
  
public  getRequester():any{
    let allusers: any[] =[];
    for(let arequest of this.requests){
      for(let auser of this.users){
        if(arequest['data' as keyof object]['senderId' as keyof object] == auser['id' as keyof object] ){
          allusers.push(auser);
        }
      }
    }
    return allusers

  }

}

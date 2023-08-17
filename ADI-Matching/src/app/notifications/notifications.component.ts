import { Component, OnInit } from '@angular/core';
import { MatchService } from '../services/match.service';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
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

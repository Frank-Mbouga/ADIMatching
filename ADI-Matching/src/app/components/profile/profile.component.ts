import { Component, OnInit } from '@angular/core';
import { Firestore, collection, doc, getDocs, query, where } from '@angular/fire/firestore';
import { MatFabButton } from '@angular/material/button';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LocalstoreService } from 'src/app/services/localstore.service';
import { MatchService } from 'src/app/services/match.service';
import { EducationinfoComponent } from '../profileeditors/educationinfo/educationinfo.component';
import { ContactinfoComponent } from '../profileeditors/contactinfo/contactinfo.component';
import { RelatedskillsComponent } from '../profileeditors/relatedskills/relatedskills.component';
import { ServicesComponent } from '../profileeditors/services/services.component';
import { WebsiteComponent } from '../profileeditors/website/website.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
   userinfoFromfirestore:any = [] ;
   logins:any
  //  scr =  
   constructor(
    private fire: Firestore,
    private localstore: LocalstoreService,
    private matchservice:MatchService,
    private route:Router,
    private dialog:MatDialog
  ) {

    matchservice.emmitLogins.subscribe((login=>{
      this.logins = login;
      
  }))
     
  }

  ngOnInit(): void {

  }
  //Initialisation of firestore variables 
  dbrefUsers = collection(this.fire, 'Users');
  docRef = doc(this.dbrefUsers, this.localstore.get('User').data['email']);
  userSubcol = collection(this.docRef, "profile")
  requestCollection = collection(this.fire, 'Match_Request');
  dbref = collection(this.fire, 'ConfirmedUsers');

  infoFromLocalStorage = this.localstore.get('User').data;

  showContactInfo(e:any){
    console.log('you clicked this button');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    dialogConfig.maxHeight= '80vh'
    this.dialog.open(ContactinfoComponent,dialogConfig)
  }
  showEducationInfo(e:any){
    console.log('you clicked this button');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    dialogConfig.maxHeight= '80vh'
    this.dialog.open(EducationinfoComponent,dialogConfig)
  }
  showRelatedSkills(e:any){
    console.log('you clicked this button');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    dialogConfig.maxHeight= '80vh'
    this.dialog.open(RelatedskillsComponent,dialogConfig)
  }
  showServices(e:any){
    console.log('you clicked this button');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    dialogConfig.maxHeight= '80vh'
    dialogConfig.data ={
      title:'Add Services'
    }

    this.dialog.open(ServicesComponent,dialogConfig)
  }
  showWebsite(e:any){
    console.log('you clicked this button');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    dialogConfig.maxHeight= '80vh'
    this.dialog.open(WebsiteComponent,dialogConfig)
  }
  showHighlights(e:any){
    console.log('you clicked this button');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    dialogConfig.maxHeight= '80vh'
    // this.dialog.open(,dialogConfig)
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LocalstoreService } from 'src/app/services/localstore.service';
import { MatchService } from 'src/app/services/match.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Input() logincredits: any;
  @Input() breadCrumb!: string;
  @Output() showRequests = new EventEmitter<boolean>()

  out = true;
 public matchRequests: any[] = [];
  constructor(
    private localstore: LocalstoreService,
    public userservice: UserService,
    private authservice: AuthenticationService,
    private matchservice: MatchService
  ) {
    matchservice.emmitMR.subscribe(mar => {
      console.log('mar:', mar);
      
      this.matchRequests = mar
      console.log('from Nav', this.matchRequests);
      
    })
  }

  toggleClass(e: any) {
    this.out = !this.out
    
    this.showRequests.emit(this.out);
  }
  signOut() {
    this.authservice.signOut();
  }
}

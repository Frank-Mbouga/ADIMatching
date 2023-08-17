import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { LocalstoreService } from './localstore.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  emmitMatches = new BehaviorSubject<object>({});
  emmitLogins = new BehaviorSubject<object>({});
  emmitMR = new BehaviorSubject<any>([]);
  emmitRequesters = new BehaviorSubject<object>({})

  takeLogins = this.emmitLogins.asObservable();
  took = this.emmitMatches.asObservable();
  MR = this.emmitMR.asObservable();

  public getMatches(match: object) {
    this.emmitMatches.next(match);
  }
  public getLogins(login:object){
    this.emmitLogins.next(login);
  }
  public getMR(mr:object){
    this.emmitMR.next(mr);
  }
  public getRequesters(requester:object){
    this.emmitMR.next(requester);
  }
}

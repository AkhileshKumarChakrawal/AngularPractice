import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private siblingmsg = new BehaviorSubject<string>('default msg');
  currentMsg = this.siblingmsg.asObservable();
  constructor() { }
  changeMsg(message : string){
    this.siblingmsg.next(message);
  }
}

import { Component } from '@angular/core';
//import {FormGroup} from "@angular/forms";
import {FormGroup,FormControl}from "@angular/forms";
import {from} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularRouter';

  userReg =new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl('')
  });

  onSubmit(){
    console.log(this.userReg.value);
  }
}

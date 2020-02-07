import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators, FormBuilder,FormArrayName} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForm';

  /*regForm = new FormGroup({
    fname :new FormControl('',Validators.required),
    lname : new  FormControl('',Validators.required),
        address : new FormGroup({
        address1 : new  FormControl(''),
        address2 : new FormControl(''),
        state : new FormControl(''),
        zip : new FormControl('')
    })
  });*/
  constructor(private  fb : FormBuilder){}

  regForm = this.fb.group({
    fname : [''],
    lname : [''],
    address : this.fb.group({
      address1 : [''],
      address2 : [''],
      state : [''],
      zip : ['']
    })

  });
  onsubmit(){
    console.log(this.regForm.value);
    console.log(this.regForm.get(['address','address1']).value);
  }

  updateformData(){
    this.regForm.patchValue({
      fname : 'aman',
      address :{
        address1 : 'sr nagar'
      }
    });
  }
}

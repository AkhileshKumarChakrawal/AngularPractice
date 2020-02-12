import { Component, OnInit,Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {

  student = [
    {id : 101 , name : 'Aman', class : '7th'},
    {id : 102, name : 'Ajay', class : '9th'},
    {id : 103 ,name : 'Amar', class : '12th'}
  ];


  constructor(private router : Router) { }

  ngOnInit() {
  }
onSelect(stdDetail){
this.router.navigate(['../stdDetail' , stdDetail.id]);
}
}

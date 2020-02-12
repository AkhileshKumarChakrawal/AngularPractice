import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student:string ="student detail are here";
  students =[
    {id:101 , name : 'Aman', class:'7th', section : 'A'},
    {id:102 , name : 'Arjun', class:'10th', section : 'B'},
    {id:103 , name : 'Ram', class:'7th', section : 'C'},
    {id:104 , name : 'Abhimanyu', class:'7th', section : 'B'},
  ];
  constructor() { }

  ngOnInit() {
  }

}

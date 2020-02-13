import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  student = [
    {sid : 101 , sname : 'Aman', address : {dist : 'Vns', state : 'UP', zip : 221005 }},
    {sid : 102 , sname : 'Azhar', address : {dist : 'Mumbai', state : 'Maharastra', zip : 221003 }},
    {sid : 103 , sname : 'Akash', address : {dist : 'Lucknow', state : 'UP', zip : 241063 }},
    {sid : 104 , sname : 'Amar', address : {dist : 'Gorakhpur', state : 'UP', zip : 218503 }}
    ];

  constructor(private route : Router) { }

  ngOnInit() {
  }
  viewDetail(std){
    this.route.navigate(['/students' , std.sid]);
  }
  editPage(std){
    this.route.navigate(['/students' , std.sid]);
  }
}

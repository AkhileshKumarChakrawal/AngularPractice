import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  sid : number;
  english : number;
  math : number;
  physic : number
  constructor(private activeRoute : ActivatedRoute) { }

  Marks =[
    {math : 66, english : 77 , physics : 88, sid : 101},
    {math : 94, english : 58 , physics : 89, sid : 102},
    {math : 46, english : 98 , physics : 48, sid : 103},
    {math : 84, english : 39 , physics : 71, sid : 104}
  ];
  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params : ParamMap)=>{
      this.sid = parseInt(params.get('id'));
      for(let mark of this.Marks){
        if(mark.sid == this.sid){
          this.english = mark.english;
          this.math = mark.math;
          this.physic = mark.physics;
        }
      }
    });
  }


}

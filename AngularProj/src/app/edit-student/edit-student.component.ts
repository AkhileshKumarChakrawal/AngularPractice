import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  id : number;
  constructor(private editroute : ActivatedRoute) { }

  ngOnInit() {
    this.editroute.paramMap.subscribe((par : ParamMap)=>{
      this.id = parseInt(par.get('id'));
    });
  }

}

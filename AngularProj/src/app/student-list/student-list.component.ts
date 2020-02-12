import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  @Input() details:string;
  @Input() stdDetails:string;
  constructor() { }

  ngOnInit() {
  }

}
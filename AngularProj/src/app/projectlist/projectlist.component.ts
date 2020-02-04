import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent implements OnInit {
  @Input() produ;

  constructor() { }

  ngOnInit() {
  }

}

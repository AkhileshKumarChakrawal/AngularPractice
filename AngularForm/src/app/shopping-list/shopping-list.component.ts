import { Component, OnInit } from '@angular/core';
import {IndradientModule} from "../shared/indradient.module";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingridient : IndradientModule[] =[
    new IndradientModule('apple',5),
    new IndradientModule('banana',10)
  ];
  constructor() { }

  ngOnInit() {
  }

}

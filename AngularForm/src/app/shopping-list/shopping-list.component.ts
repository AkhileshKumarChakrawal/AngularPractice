import { Component, OnInit } from '@angular/core';
import {IndradientModule} from "../shared/indradient.module";
import {ShoppingService} from "./shoppingService";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  /*ingridient : IndradientModule[] =[
    new IndradientModule('apple',5),
    new IndradientModule('banana',10)
  ];*/
  ingridient : IndradientModule[];
  constructor(private shoppingData : ShoppingService) { }

  ngOnInit() {
    this.ingridient = this.shoppingData.getShoppingData();
  }
  newIngredientAdd(ing : IndradientModule){
    this.ingridient.push(ing);
    console.log(this.ingridient);
  }
}

import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IndradientModule} from "../../shared/indradient.module";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName',{static: false}) nameInputRef : ElementRef;
  @ViewChild('inputAmount', {static :false})amountInputRef : ElementRef;
 @Output() ingradientAddes = new EventEmitter<IndradientModule>()

  constructor() { }

  ngOnInit() {
  }
  addIngridient(){
  const ingName = this.nameInputRef.nativeElement.value;
  const ingAmount = this.amountInputRef.nativeElement.value;
  const newIngredient = new IndradientModule(ingName , ingAmount);
  this.ingradientAddes.emit(newIngredient);
  }
}

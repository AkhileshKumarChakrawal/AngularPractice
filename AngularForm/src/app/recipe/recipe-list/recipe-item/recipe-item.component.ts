import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeModule} from "../../recipe.module";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

 @Input() recipe : RecipeModule;

 @Output() loadrecipe = new EventEmitter<void>()
  constructor() { }

  ngOnInit() {
  }
  loadRecipeItem(){
   this.loadrecipe.emit();
  }
}

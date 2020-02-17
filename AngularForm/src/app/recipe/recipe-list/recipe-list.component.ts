import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeModule} from "../recipe.module";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipeName : string;
    recipeDes : string;
  recipes : RecipeModule[] = [
    new RecipeModule('Idly',"very good"),
    new RecipeModule('dosha','Onion dosha')
  ];
  constructor() {

  }

  ngOnInit() {
  }
  @Output() recipwasSelected = new EventEmitter<RecipeModule>();
  onRecipeSelected(recipe : RecipeModule){
  this.recipwasSelected.emit(recipe);
  }
}

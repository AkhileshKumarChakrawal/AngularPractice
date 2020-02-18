import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeModule} from "../../recipe.module";
import {RecipeService} from "../../recipeService";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

 @Input() recipe : RecipeModule;

 /*@Output() loadrecipe = new EventEmitter<void>()*/
  constructor(private recipeSelected : RecipeService) { }

  ngOnInit() {
  }
  loadRecipeItem(){
   /*this.loadrecipe.emit();*/
    this.recipeSelected.recipwasSelected.emit(this.recipe);
  }
}

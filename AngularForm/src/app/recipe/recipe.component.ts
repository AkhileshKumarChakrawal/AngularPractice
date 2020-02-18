import { Component, OnInit } from '@angular/core';
import {RecipeModule} from "./recipe.module";
import {RecipeService} from "./recipeService";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers : [RecipeService]
})
export class RecipeComponent implements OnInit {

  selectedRecipe : RecipeModule;
  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
  this.recipeService.recipwasSelected.subscribe(
    (recipe : RecipeModule)=>{
      this.selectedRecipe =recipe;
    }
  )
  }

}

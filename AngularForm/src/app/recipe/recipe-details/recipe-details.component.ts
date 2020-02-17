import {Component, Input, OnInit} from '@angular/core';
import {RecipeModule} from "../recipe.module";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipe : RecipeModule;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {Hero}from '../hero';
import {from} from "rxjs";
import {Heroes}from '../mock-heroes'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
hero:Hero={
  id : 101,
  name : 'Chaks'
};
heros = Heroes;
selectedhero : Hero;
  onselect(hero:Hero){
    this.selectedhero = hero;
  }
constructor() { }

  ngOnInit() {
  }

}

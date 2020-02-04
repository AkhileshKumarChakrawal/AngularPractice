import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product : [
    {id: 101 , name : 'p1', price : 1000},
    {id:102 , name : 'p2' , price:2000},
    {id: 103 , name : 'p3', price : 3000},
    {id:104 , name : 'p4' , price:2000}
    ];
  constructor() { }

  ngOnInit() {
  }

}

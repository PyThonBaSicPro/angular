import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// product Table
  // Created Product Array
  product=[
    // product Object
    {proimg:'https://images-na.ssl-images-amazon.com/images/I/8189czxRlUL._SL1500_.jpg',name:'shoes',price:22,id:1},
    {proimg:'https://images-na.ssl-images-amazon.com/images/I/81ep28K%2BXYL._UL1500_.jpg',name:'shirt',price:75,id:2},
    {proimg:'https://images-na.ssl-images-amazon.com/images/I/31d6HLgroCL.jpg',name:'t-shirt',price:50,id:3},
  ];

  // other example
  newList=[
    {  name: "Pepperoni", price: 899 },
  {  name: "Supreme", price: 999 },
  {  name: "Sizzler", price: 899 },
  ];
}

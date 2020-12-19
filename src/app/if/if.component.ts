import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  condition:boolean = false;
  data:string="";

  btnChange(){
    this.condition=true;
    this.data="button clicked";
  }





}

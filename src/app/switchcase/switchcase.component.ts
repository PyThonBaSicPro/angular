import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchcase',
  templateUrl: './switchcase.component.html',
  styleUrls: ['./switchcase.component.css']
})
export class SwitchcaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // method-1
  color="orange";


  // method-2
  data="";
  getValue(val :any){
    this.data=val.target.value;
  }

}

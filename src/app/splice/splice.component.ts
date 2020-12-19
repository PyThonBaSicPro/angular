import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splice',
  templateUrl: './splice.component.html',
  styleUrls: ['./splice.component.css']
})
export class SpliceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username=[];

  getData(data:any){
    this.username.push({
      name:data.value,
    });
  };

    // Splice is used to delete recently added data
  deleteData(){
    this.username.splice(this.username.length - 1)};
};

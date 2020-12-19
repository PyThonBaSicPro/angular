import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-push-and-splice-dynamic2',
  templateUrl: './push-and-splice-dynamic2.component.html',
  styleUrls: ['./push-and-splice-dynamic2.component.css']
})
export class PushAndSpliceDynamic2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username=[];
  getData(data:any){
    this.username.push({
      name:data.value
    });
  };
  // Splice is used to delete recently added data
  deleteData(){
    this.username.splice(this.username.length - 1, 1)
  };

  // Delete by ID
  deleteUser(val:any){
    this.username.splice(val,1);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-push-and-splice',
  templateUrl: './push-and-splice.component.html',
  styleUrls: ['./push-and-splice.component.css']
})
export class PushAndSpliceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  // using ID Method
  username=[];

  getData(data:any){
    this.username.push({
      name:data.value,
    })
  };


  // using mgModel

  newName:string="";
  newList=[];
  getClick(){
    this.newList.push({
      user:this.newName,
    });
  };


  

}

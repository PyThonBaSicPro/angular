import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-push-and-splice-dynamic',
  templateUrl: './push-and-splice-dynamic.component.html',
  styleUrls: ['./push-and-splice-dynamic.component.css']
})
export class PushAndSpliceDynamicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }




  
  username=[];
  // for add Data
  getData(data:any){
    this.username.push({
      name:data.value,
    });
  };

  // for delete data
  idnumber:number=0;
  
  deleteData(){
    this.username.splice(this.idnumber- 1,1)
  };



}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-priorities-diolouge',
  templateUrl: './priorities-diolouge.component.html',
  styleUrls: ['./priorities-diolouge.component.scss']
})
export class PrioritiesDiolougeComponent {
  data:any;
  constructor(   @Inject(MAT_DIALOG_DATA) data: { message: string }
  ){
    this.data=data;
    console.log(this.data,"12***")
  }
  getPreviousAge(id:number){
    const data=this.data.previousData.find((val:any)=>val.id==id)
    return data.age?data.age:'No Age'
  }
}

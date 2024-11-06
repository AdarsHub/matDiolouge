import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PrioritiesDiolougeComponent } from '../priorities-diolouge/priorities-diolouge.component';
@Component({
  selector: 'app-priorities',
  templateUrl: './priorities.component.html',
  styleUrls: ['./priorities.component.scss']
})
export class PrioritiesComponent {
listItems:any;
doilougeData:any;
previousData=[{id:1,name:"Adarsh",age:22}]
constructor(private diologe:MatDialog){
  this.listItems=[{id:1,name:"Adarsh",age:22}]
}
diolougeData(event:any){
  console.log(event,"test")
  this.diologe.open(PrioritiesDiolougeComponent,{
    
      width: '600px',
      height: '210px',
      data:{currentData:this.listItems,previousData:this.previousData},
     
  },
   )


}
}

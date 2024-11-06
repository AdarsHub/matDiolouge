import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-priorities-list',
  templateUrl: './priorities-list.component.html',
  styleUrls: ['./priorities-list.component.scss']
})
export class PrioritiesListComponent {
  @Input() prioritiesList:any;
  data:any[]=[];
  @Output() diolougeData=new EventEmitter<any>();
  options=[21,22,23,19]
  selectOption='';
  ngOnChanges(){
console.log(this.prioritiesList,"111")
  }
  click(){
    this.diolougeData.emit(this.data)

  }
  change(val:any,i:number){
    const changeVal=val.target.value;
    console.log(val.target.value);
    this.prioritiesList[i].age=changeVal;
    this.data.push(this.prioritiesList[i])
  }
}

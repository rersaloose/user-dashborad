import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/model/user-model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() data!:User
  @Output() item = new EventEmitter();
  addbutton:boolean=false;
  amount:number=0;
 constructor(){}

 add(){
   this.item.emit({item:this.data,quantity:this.amount})
 }
}

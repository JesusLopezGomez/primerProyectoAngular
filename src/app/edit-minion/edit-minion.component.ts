import { Component, Input, OnInit } from '@angular/core';
import { Minion } from '../interface/minion';
import { MinionsService } from '../services/minions.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-minion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-minion.component.html',
  styleUrl: './edit-minion.component.css'
})
export class EditMinionComponent implements OnInit{
 
  @Input() id = "";

  minion:Minion;

  editFlag:boolean = false;

  constructor(private minionService:MinionsService){
    this.minion = {name:'',bio:'',birth:'',img:'',side:'',id:''}
  }

  ngOnInit(): void {
    this.minionService.getMinionById(this.id).subscribe({
      next: (minion) => this.minion = minion
    })
  }


  edit(){
    this.minionService.editMinion(this.minion).subscribe({
      next: () => this.editFlag = true
    });
  }
}

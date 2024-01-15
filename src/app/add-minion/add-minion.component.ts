import { Component, Input } from '@angular/core';
import { Minion } from '../interface/minion';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MinionsService } from '../services/minions.service';

@Component({
  selector: 'app-add-minion',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-minion.component.html',
  styleUrl: './add-minion.component.css'
})
export class AddMinionComponent {
  add = false;

  minion:Omit<Minion,"id">;

  @Input() id = "";

  constructor(private minionService:MinionsService){
    this.minion = {name:'',bio:'',birth:'',img:'',side:''}
  }

  saveMinion(){
    this.minionService.addMinion(this.minion).subscribe();
    this.add = true;
  }

  
}

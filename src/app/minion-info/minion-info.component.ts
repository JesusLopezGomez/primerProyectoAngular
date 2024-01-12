import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MinionsService } from '../services/minions.service';
import { Minion } from '../interface/minion';

@Component({
  selector: 'app-minion-info',
  standalone: true,
  imports: [],
  templateUrl: './minion-info.component.html',
  styleUrl: './minion-info.component.css'
})
export class MinionInfoComponent implements OnChanges{

  @Input() name:string = "";
  minions!:Minion[];
  constructor(private serviceMinion:MinionsService){}

  ngOnChanges(){
    this.serviceMinion.getMinionByName(this.name)
    .subscribe({
      next: (minions) => this.minions = minions,
    })
  }
}

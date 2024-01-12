import { Component, Input } from '@angular/core';
import { MinionsService } from '../services/minions.service';
import { Minion } from '../interface/minion';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-minion-id',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './info-minion-id.component.html',
  styleUrl: './info-minion-id.component.css'
})
export class InfoMinionIdComponent {

  @Input() id:string = "";
  minions!:Minion[];
  constructor(private serviceMinion:MinionsService){}

  ngOnChanges(){
    this.serviceMinion.getMinionById(this.id)
    .subscribe({
      next: (minions) => this.minions = minions,
    })
  }

}

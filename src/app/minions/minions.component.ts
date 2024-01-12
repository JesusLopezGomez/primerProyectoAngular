import { Component, OnInit } from '@angular/core';
import { Minion } from '../interface/minion';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MinionsService } from '../services/minions.service';

@Component({
  selector: 'app-minions',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './minions.component.html',
  styleUrl: './minions.component.css'
})
export class MinionsComponent implements OnInit{
  
  constructor(private serviceMinion:MinionsService){}

  minions:Minion[] = [];

  favorites:Minion[]= [];

  ngOnInit(){
    this.serviceMinion.getMinions().subscribe({
      next: (minions) => this.minions = minions ,
    })
  }

  addFavorite(minionName:Minion){
    this.favorites.push(minionName);
  }


  removeFavorite(minion:Minion){
    this.favorites.splice(this.favorites.indexOf(minion),1);
  }
}

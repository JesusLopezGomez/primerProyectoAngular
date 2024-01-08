import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Minion } from '../interface/minion';
import { MinionsService } from '../services/minions.service';

@Component({
  selector: 'app-minions-filtrados',
  standalone: true,
  imports: [],
  templateUrl: './minions-filtrados.component.html',
  styleUrl: './minions-filtrados.component.css'
})
export class MinionsFiltradosComponent implements OnChanges,OnInit{
  @Input() termino:string = "";

  minionsFiltrados:Minion[] = []
  constructor(private minionsService:MinionsService){ }


  ngOnInit(): void {
    this.minionsFiltrados = this.minionsService.getMinions();
  }

  ngOnChanges(): void {
    this.minionsFiltrados = this.minionsService.getFilterMinions(this.termino);
  }
}

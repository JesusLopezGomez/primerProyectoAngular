import { Component, Input } from '@angular/core';
import { Minion } from '../interface/minion';

@Component({
  selector: 'app-minions-filtrados',
  standalone: true,
  imports: [],
  templateUrl: './minions-filtrados.component.html',
  styleUrl: './minions-filtrados.component.css'
})
export class MinionsFiltradosComponent {
  @Input() minionsFiltrados:Minion[] = [];
}

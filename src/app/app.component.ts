import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MinionsNavBarComponent } from './minionsNavBar/minionsNavBar.component';
import { MinionsComponent } from './minions/minions.component';
import { Minion } from './interface/minion';
import { MinionsFiltradosComponent } from './minions-filtrados/minions-filtrados.component';
import { MinionsService } from './services/minions.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MinionsNavBarComponent,MinionsComponent,MinionsFiltradosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primerProyectoAngular';
  
  constructor(private minionsService:MinionsService){}

  miniosFiltrados:Minion[] = this.minionsService.getMinions();

  term:string = ""; 

  filtrado(filtro:string){
    this.term = filtro;
  }
}

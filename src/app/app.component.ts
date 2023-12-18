import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MinionsNavBarComponent } from './minionsNavBar/minionsNavBar.component';
import { MinionsComponent } from './minions/minions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MinionsNavBarComponent,MinionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primerProyectoAngular';
}

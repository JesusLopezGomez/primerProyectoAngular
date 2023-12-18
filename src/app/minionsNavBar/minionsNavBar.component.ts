import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-minionsNavBar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './minionsNavBar.component.html',
  styleUrl: './minionsNavBar.component.css'
})

export class MinionsNavBarComponent {
  termino:string = ""; 
}

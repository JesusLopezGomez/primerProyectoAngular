import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-minionsNavBar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './minionsNavBar.component.html',
  styleUrl: './minionsNavBar.component.css'
})

export class MinionsNavBarComponent {
  termino:string = ""; 

  @Output() emitir:EventEmitter<string> = new EventEmitter<string>();

  setTermino(){
    
    this.emitir.emit(this.termino);
  }
}

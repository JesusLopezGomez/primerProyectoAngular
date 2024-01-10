import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-minionsNavBar',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './minionsNavBar.component.html',
  styleUrl: './minionsNavBar.component.css'
})

export class MinionsNavBarComponent {
  constructor(private router:Router){}

  termino:string = ""; 

  @Output() emitir:EventEmitter<string> = new EventEmitter<string>();

  setTermino(){
    this.emitir.emit(this.termino);
  }

  goTo(){
    this.router.navigate(["infoMinion",this.termino]);
  }
}

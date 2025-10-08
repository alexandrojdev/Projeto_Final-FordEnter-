import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cabecalho-dois',
  imports: [RouterLink],
  templateUrl: './cabecalho-dois.component.html',
  styleUrl: './cabecalho-dois.component.css'
})
export class CabecalhoDoisComponent {

    // 1. Variável de estado para controlar se o menu está aberto ou fechado
  public isMenuOpen: boolean = false;

  constructor() { }
  
  // 2. Método para alternar o estado do menu
  toggleMenu(): void {
    // Inverte o valor de isMenuOpen: se for true, vira false, e vice-versa.
    this.isMenuOpen = !this.isMenuOpen;
  }

}

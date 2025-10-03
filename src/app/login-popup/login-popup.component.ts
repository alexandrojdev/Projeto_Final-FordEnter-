import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <- IMPORTANTE PARA [(ngModel)]

@Component({
  selector: 'app-login-popup',
  standalone: true,           // <- MARCAR COMO STANDALONE
  imports: [CommonModule, FormsModule], // <- IMPORTS AQUI
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent {
  popupAberto = false;
  email = '';
  senha = '';

  togglePopup() {
    this.popupAberto = !this.popupAberto;
  }

  fecharPopup() {
    this.popupAberto = false;
  }

  fazerLogin() {
    console.log('Email:', this.email);
    console.log('Senha:', this.senha);
    alert('Login enviado!');
    this.fecharPopup();
  }
}

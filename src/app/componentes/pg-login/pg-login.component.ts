import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para usar *ngIf e [ngClass]
import { FormsModule } from '@angular/forms'; // Para usar [(ngModel)]
import { RouterLink } from '@angular/router';

// Declaração do SweetAlert2 (necessário se você não instalou via npm e configurou globalmente)
declare var Swal: any; 

@Component({
  selector: 'app-pg-login',
  standalone: true, // Mantendo a propriedade standalone
  // É ESSENCIAL adicionar CommonModule e FormsModule aqui
  imports: [CommonModule, FormsModule, RouterLink], 
  templateUrl: './pg-login.component.html',
  styleUrl: './pg-login.component.css'
})
export class PgLoginComponent {
  // Variáveis para o Two-Way Data Binding e estado do componente
  username: string = '';
  password!: string; // Usando '!' para indicar que será inicializada
  rememberMe: boolean = false;
  
  passwordFieldType: 'password' | 'text' = 'password';
  isPasswordVisible: boolean = false;
  
  // Método para mostrar/ocultar a senha
  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.passwordFieldType = this.isPasswordVisible ? 'text' : 'password';
  }

  // Método para limpar o campo de usuário (botão 'x')
  clearUsername(): void {
    this.username = '';
  }

  // Método chamado ao submeter o formulário (ngSubmit)
  onSubmit(): void {
    const username = this.username; 
    
    // --- Lógica de Validação ---
    
    if (!username || !this.password) {
      Swal.fire({
        icon: 'error',
        title: 'Campos Vazios',
        text: 'Por favor, preencha todos os campos obrigatórios.'
      });
      return;
    }
    
    // Validação de email (inclui '@' e termina com '.com')
    if (username.includes('@')) {
      if (!username.toLowerCase().endsWith('.com')) {
        Swal.fire({
          icon: 'error',
          title: 'Email inválido',
          text: 'O email deve terminar com .com'
        });
        return;
      }
    } else {
      // Validação básica de CPF (11 dígitos)
      const cpfDigits = username.replace(/\D/g, '');
      if (cpfDigits.length !== 11) {
        Swal.fire({
          icon: 'error',
          title: 'CPF inválido',
          text: 'O CPF deve conter 11 dígitos'
        });
        return;
      }
    }
    
    // --- Simulação de Login Bem-Sucedido ---
    Swal.fire({
      title: 'Entrando...',
      timer: 1500,
      didOpen: () => Swal.showLoading()
    }).then(() => {
      // Redirecionar. Mantenha o window.location.href se não estiver usando o Angular Router
      // Ou use: this.router.navigate(['/pages/pg_adicionar']); se tiver injetado o Router
      window.location.href = '/Pages/pg_adicionar.html'; 
    });
  }
}
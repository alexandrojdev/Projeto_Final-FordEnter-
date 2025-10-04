import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para usar *ngIf, etc.
import { FormsModule } from '@angular/forms'; // Para usar [(ngModel)]
import { RouterLink, Router } from '@angular/router'; // Para navegação

// Declaração do SweetAlert2 (necessário se não foi configurado globalmente)
declare var Swal: any; 

@Component({
  selector: 'app-pg-esqueci-senha',
  standalone: true,
  // É ESSENCIAL adicionar as dependências do formulário e navegação aqui
  imports: [CommonModule, FormsModule, RouterLink], 
  templateUrl: './pg-esqueci-senha.component.html',
  styleUrl: './pg-esqueci-senha.component.css'
})
export class PgEsqueciSenhaComponent {
  
  // Variável para o Two-Way Data Binding do campo de email
  email: string = '';
  
  // Variável de estado para controlar a aparência/habilitação do botão
  isSending: boolean = false; 

  // Injetamos o Router para navegação programática (ex: após sucesso)
  constructor(private router: Router) {} 
  
  /**
   * Limpa o campo de email (ação do botão 'x').
   */
  clearEmail(): void {
    this.email = '';
  }

  /**
   * Método chamado ao submeter o formulário (ngSubmit).
   */
  onSubmit(): void {
    const email = this.email.trim();
    
    // Desabilitar botão e mudar estado de envio
    this.isSending = true;

    // 1. Validação: Campo Vazio
    if (!email) {
      Swal.fire({
        icon: 'error',
        title: 'Campo vazio',
        text: 'Por favor, informe seu e-mail.'
      });
      this.isSending = false;
      return;
    }

    // 2. Validação: Email Inválido (termina com .com)
    if (!email.toLowerCase().includes('@') || !email.toLowerCase().endsWith('.com')) {
      Swal.fire({
        icon: 'error',
        title: 'Email inválido',
        text: 'O email deve ser um endereço válido, terminando com .com.'
      });
      this.isSending = false;
      return;
    }

    // --- Simulação de Envio ---
    Swal.fire({
      title: 'Enviando...',
      text: 'Estamos processando seu pedido.',
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => Swal.showLoading()
    }).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Link enviado!',
        text: 'Verifique sua caixa de entrada.'
      });
      
      // Reabilita o estado
      this.isSending = false;
      
      // Navega de volta para a tela de login
      this.router.navigate(['/pg-login']); 
    });
  }
}
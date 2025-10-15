import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pg-cadastro',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './pg-cadastro.component.html',
  styleUrls: ['./pg-cadastro.component.css']
})
export class PgCadastroComponent {
  usuario = {
    nome: '',
    email: '',
    cpf: '',
    senha: '',
    confirmarSenha: '',
    concorda: false
  };

  mascaraCPF() {
    // Mantém apenas os dígitos
    let v = this.usuario.cpf.replace(/\D/g, '');
    // Limita a 11 dígitos
    if (v.length > 11) {
      v = v.slice(0, 11);
    }
    // Aplica a máscara
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    this.usuario.cpf = v;
  }

  onSubmit(form: any) {
    // Alteração: Adicionada validação para o checkbox de termos
    if (!this.usuario.concorda) {
      Swal.fire({
        icon: 'warning',
        title: 'Atenção!',
        text: 'Você deve concordar com os Termos de Serviço e a Política de Privacidade para continuar.'
      });
      return;
    }

    if (this.usuario.senha !== this.usuario.confirmarSenha) {
      Swal.fire({
        icon: 'error',
        title: 'As senhas não coincidem!',
        text: 'Tente novamente.'
      });
      return;
    }

    // Alteração: Validação de 11 dígitos no CPF agora é mais explícita.
    if (this.usuario.cpf.replace(/\D/g, '').length !== 11) {
      Swal.fire({
        icon: 'error',
        title: 'CPF inválido!',
        text: 'O CPF deve conter exatamente 11 dígitos.'
      });
      return;
    }

    Swal.fire({
      title: 'Cadastrando...',
      timer: 2000,
      didOpen: () => Swal.showLoading()
    }).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Cadastro realizado com sucesso!',
        text: 'Você será redirecionado para a tela de login.'
      }).then(() => {
        window.location.href = "/pg-login";
      });
    });
  }
}

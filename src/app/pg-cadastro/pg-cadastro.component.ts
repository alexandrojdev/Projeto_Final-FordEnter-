import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // IMPORTANTE
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pg-cadastro',
  standalone: true,
  imports: [FormsModule],  // <- preciso para ngModel e ngForm
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
    let v = this.usuario.cpf.replace(/\D/g, '');
    if (v.length > 11) v = v.slice(0, 11);
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    this.usuario.cpf = v;
  }

  onSubmit(form: any) {
    if (this.usuario.senha !== this.usuario.confirmarSenha) {
      Swal.fire({
        icon: 'error',
        title: 'As senhas não coincidem!',
        text: 'Tente novamente.'
      });
      return;
    }

    if (this.usuario.cpf.replace(/\D/g, '').length !== 11) {
      Swal.fire({
        icon: 'error',
        title: 'CPF inválido!',
        text: 'O CPF deve conter 11 dígitos.'
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
        window.location.href = "pg_login.html";
      });
    });
  }
}

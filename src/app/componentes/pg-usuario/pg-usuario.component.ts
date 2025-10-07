import { Component } from '@angular/core';
import { CabecalhoDoisComponent } from '../cabecalho-dois/cabecalho-dois.component';
import { BuscarServicosComponent } from '../buscar-servicos/buscar-servicos.component';
import { FooterPrincipalComponent } from '../footer-principal/footer-principal.component';
import { CommonModule } from '@angular/common'; // IMPORTANTE: Importe o CommonModule

@Component({
  selector: 'app-pg-usuario',
  standalone: true, // Adicione standalone: true se seu componente for standalone
  imports: [
    CommonModule, // Adicione aqui para usar ngSwitch, ngIf, etc.
    CabecalhoDoisComponent, 
    BuscarServicosComponent, 
    FooterPrincipalComponent
  ],
  templateUrl: './pg-usuario.component.html',
  styleUrl: './pg-usuario.component.css'
})
export class PgUsuarioComponent {

  // Variável que armazena a string do conteúdo a ser exibido
  // Começa com 'agendamentos' para ter um conteúdo padrão
  conteudoSelecionado: string = 'agendamentos';

  /**
   * Função chamada pelo evento (click) no HTML.
   * @param conteudo A string que identifica o conteúdo a ser mostrado.
   */
  mostrarConteudo(conteudo: string): void {
    this.conteudoSelecionado = conteudo;
  }

}
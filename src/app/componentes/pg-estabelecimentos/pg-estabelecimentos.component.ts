import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- ESSENCIAL para *ngFor e o pipe 'currency'
import { CabecalhoDoisComponent } from '../cabecalho-dois/cabecalho-dois.component';
import { BuscarServicosComponent } from '../buscar-servicos/buscar-servicos.component';
import { CabecalhoUmComponent } from '../cabecalho-um/cabecalho-um.component';
import { FooterPrincipalComponent } from '../footer-principal/footer-principal.component';

// Importe o CarouselModule para que o HTML reconheça o carrossel
import { CarouselModule } from 'ngx-bootstrap/carousel';

// Importe a interface que define a estrutura dos nossos dados
import { Estabelecimentos } from './estabelecimentos.model';

@Component({
  selector: 'app-pg-estabelecimentos',
  standalone: true, // <-- Define que este é um componente independente
  imports: [
    CommonModule,    // <-- Permite o uso de diretivas como *ngFor, *ngIf, etc.
    CarouselModule, CabecalhoDoisComponent, FooterPrincipalComponent, BuscarServicosComponent, CabecalhoUmComponent  // <-- Torna os componentes do carrossel (carousel, slide) disponíveis no template
  ],
  templateUrl: './pg-estabelecimentos.component.html',
  styleUrl: './pg-estabelecimentos.component.css'
})
export class PgEstabelecimentosComponent {

  // Array com os dados dos estabelecimentos que serão exibidos na tela
  estabelecimentos: Estabelecimentos[] = [
    {
      id: 1,
      nome: 'Beleza Divina',
      endereco: 'Rua das Hortênsias, 123 - Pituba',
      imagemUrl: '/salao_beleza1.png',
      avaliacao: 4.8,
      servicos: [
        { nome: 'Cortes Modernos', preco: 40.00 },
        { nome: 'Penteado para eventos', preco: 80.00 },
        { nome: 'ULTRA CACHOS', preco: 15.00 },
        { nome: 'Texturização', preco: 15.00 }

      ]
    },
    {
      id: 2,
      nome: 'Glamour Express',
      endereco: 'Rua Professora Magalhães Neto, 789 - Costa Azul',
      imagemUrl: '/salao_beleza2.png',
      avaliacao: 4.9,
      servicos: [
        { nome: 'Escova Express', preco: 70.00 },
        { nome: 'Cortes rápidos', preco: 45.00 },
      ]
    },
    {
      id: 3,
      nome: 'Cabelo & Arte',
      endereco: 'Largo de Santana, 303 - Rio Vermelho',
      imagemUrl: '/salao_beleza3.png',
      avaliacao: 4.7,
      servicos: [
        { nome: 'Coloração fantasiosa', preco: 70.00 },
        { nome: 'Maquiagem performática', preco: 90.00 },
        { nome: 'Body painting', preco: 350.00 }
      ]
    }
  ];

  // O construtor é executado quando o componente é criado.
  // Pode ser usado para injetar serviços no futuro.
  constructor() { }

  /**
   * Função chamada quando o botão "Reservar" de um estabelecimento é clicado.
   * @param nomeEstabelecimento O nome do estabelecimento para o qual a reserva foi solicitada.
   */
  reservar(nomeEstabelecimento: string): void {
    alert(`Reserva solicitada para: ${nomeEstabelecimento}`);
    // No futuro, aqui você pode adicionar a lógica para abrir um modal,
    // navegar para outra página ou chamar um serviço de API.
  }
}
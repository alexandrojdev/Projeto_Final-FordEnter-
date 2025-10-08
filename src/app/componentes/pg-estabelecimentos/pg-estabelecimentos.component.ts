import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- ESSENCIAL para *ngFor e o pipe 'currency'
import { CabecalhoDoisComponent } from '../cabecalho-dois/cabecalho-dois.component';

// Importe o CarouselModule para que o HTML reconheça o carrossel
import { CarouselModule } from 'ngx-bootstrap/carousel';

// Importe a interface que define a estrutura dos nossos dados
import { Estabelecimentos } from './estabelecimentos.model';

@Component({
  selector: 'app-pg-estabelecimentos',
  standalone: true, // <-- Define que este é um componente independente
  imports: [
    CommonModule,    // <-- Permite o uso de diretivas como *ngFor, *ngIf, etc.
    CarouselModule, CabecalhoDoisComponent,   // <-- Torna os componentes do carrossel (carousel, slide) disponíveis no template
  ],
  templateUrl: './pg-estabelecimentos.component.html',
  styleUrl: './pg-estabelecimentos.component.css'
})
export class PgEstabelecimentosComponent {

  // Array com os dados dos estabelecimentos que serão exibidos na tela
  estabelecimentos: Estabelecimentos[] = [
    {
      id: 1,
      nome: 'Beleza Natural',
      endereco: 'Rua das Tesouras, 123, Centro',
      imagemUrl: '/img_beleza_natural.webp',
      avaliacao: 4.8,
      servicos: [
        { nome: 'Tratamentos e Revitalização', preco: 40.00 },
        { nome: 'bn.Volumais', preco: 35.00 },
        { nome: 'ULTRA CACHOS', preco: 15.00 },
        { nome: 'Texturização', preco: 15.00 }

      ]
    },
    {
      id: 2,
      nome: 'Studio de Beleza Moderno',
      endereco: 'Avenida das Estrelas, 500, Jardins',
      imagemUrl: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHNhbG9ufGVufDB8fHx8MTY3OTg1MjY2NQ&ixlib=rb-4.0.3&q=80&w=800',
      avaliacao: 4.9,
      servicos: [
        { nome: 'Manicure e Pedicure', preco: 70.00 },
        { nome: 'Design de Sobrancelha', preco: 45.00 },
        { nome: 'Limpeza de Pele', preco: 120.00 }
      ]
    },
    {
      id: 3,
      nome: 'Navalha & Cia',
      endereco: 'Travessa do Fio, 45, Vila Madalena',
      imagemUrl: 'https://images.unsplash.com/photo-1621607512214-6c34903434ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxiYXJiZXJzaG9wfGVufDB8fHx8MTY3OTg1MjYyOQ&ixlib=rb-4.0.3&q=80&w=800',
      avaliacao: 4.7,
      servicos: [
        { nome: 'Corte + Barba', preco: 70.00 },
        { nome: 'Coloração', preco: 90.00 },
        { nome: 'Hidratação Capilar', preco: 50.00 }
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
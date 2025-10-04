import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoUmComponent } from '../cabecalho-um/cabecalho-um.component';
import { CabecalhoDoisComponent } from '../cabecalho-dois/cabecalho-dois.component';
import { FooterPrincipalComponent } from '../footer-principal/footer-principal.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pg-termos-servico',
  imports: [CommonModule, CabecalhoUmComponent, CabecalhoDoisComponent, FooterPrincipalComponent, RouterLink],
  templateUrl: './pg-termos-servico.component.html',
  styleUrl: './pg-termos-servico.component.css'
})
export class PgTermosServicoComponent {

}

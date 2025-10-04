import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoUmComponent } from '../cabecalho-um/cabecalho-um.component';
import { CabecalhoDoisComponent } from '../cabecalho-dois/cabecalho-dois.component';
import { FooterPrincipalComponent } from '../footer-principal/footer-principal.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pg-contato',
  imports: [CommonModule, CabecalhoUmComponent, CabecalhoDoisComponent, FooterPrincipalComponent, RouterLink],
  templateUrl: './pg-contato.component.html',
  styleUrl: './pg-contato.component.css'
})
export class PgContatoComponent {

}

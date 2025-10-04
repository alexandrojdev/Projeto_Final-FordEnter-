import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoUmComponent } from '../cabecalho-um/cabecalho-um.component';
import { CabecalhoDoisComponent } from '../cabecalho-dois/cabecalho-dois.component';
import { FooterPrincipalComponent } from '../footer-principal/footer-principal.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pg-politica-priv',
  imports: [CommonModule, CabecalhoUmComponent, CabecalhoDoisComponent, FooterPrincipalComponent, RouterLink],
  templateUrl: './pg-politica-priv.component.html',
  styleUrl: './pg-politica-priv.component.css'
})
export class PgPoliticaPrivComponent {

}

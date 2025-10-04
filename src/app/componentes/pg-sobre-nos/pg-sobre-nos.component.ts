import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoUmComponent } from '../cabecalho-um/cabecalho-um.component';
import { CabecalhoDoisComponent } from '../cabecalho-dois/cabecalho-dois.component';
import { FooterPrincipalComponent } from '../footer-principal/footer-principal.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pg-sobre-nos',
  imports: [CommonModule, CabecalhoUmComponent, CabecalhoDoisComponent, FooterPrincipalComponent, RouterLink],
  templateUrl: './pg-sobre-nos.component.html',
  styleUrl: './pg-sobre-nos.component.css'
})
export class PgSobreNosComponent {

}

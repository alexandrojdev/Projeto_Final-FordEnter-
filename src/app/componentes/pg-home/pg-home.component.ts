import { Component } from '@angular/core';
import { CarrosselComponent } from '../../carrossel/carrossel.component';
import { CabecalhoUmComponent } from "../cabecalho-um/cabecalho-um.component";
import { CabecalhoDoisComponent } from "../cabecalho-dois/cabecalho-dois.component";
import { OpcaoDonwloadComponent } from "../opcao-donwload/opcao-donwload.component";
import { BlocoRecomendacoesComponent } from "../bloco-recomendacoes/bloco-recomendacoes.component";
import { FooterPrincipalComponent } from "../footer-principal/footer-principal.component";


@Component({
  selector: 'app-pg-home',
  imports: [CarrosselComponent, CabecalhoUmComponent, CabecalhoDoisComponent, 
    OpcaoDonwloadComponent, BlocoRecomendacoesComponent, FooterPrincipalComponent,],
  templateUrl: './pg-home.component.html',
  styleUrl: './pg-home.component.css'
})
export class PgHomeComponent {

  


}

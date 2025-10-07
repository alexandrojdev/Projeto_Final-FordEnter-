import { Routes } from '@angular/router';
import { PgCadastroComponent } from './pg-cadastro/pg-cadastro.component';
import { PgHomeComponent } from './componentes/pg-home/pg-home.component';
import { PgLoginComponent } from './componentes/pg-login/pg-login.component';
import { PgEsqueciSenhaComponent } from './componentes/pg-esqueci-senha/pg-esqueci-senha.component';
import { PgSobreNosComponent } from './componentes/pg-sobre-nos/pg-sobre-nos.component';
import { FooterPrincipalComponent } from './componentes/footer-principal/footer-principal.component';
import { PgTermosServicoComponent } from './componentes/pg-termos-servico/pg-termos-servico.component';
import { PgPoliticaPrivComponent } from './componentes/pg-politica-priv/pg-politica-priv.component';
import { PgSegurancaComponent } from './componentes/pg-seguranca/pg-seguranca.component';
import { PgContatoComponent } from './componentes/pg-contato/pg-contato.component';
import { BuscarServicosComponent } from './componentes/buscar-servicos/buscar-servicos.component';
import { PgUsuarioComponent } from './componentes/pg-usuario/pg-usuario.component';

export const routes: Routes = [

    {
        path: 'pg-cadastro', // 2. Defina o caminho (ex: http://localhost:4200/nome-da-rota)
        component: PgCadastroComponent, // 3. Associe o componente a esse caminho
      },
    {
        path: 'pg-home',
        component: PgHomeComponent,
    },
    {
        path:'', redirectTo: 'pg-home',
        pathMatch: 'full'
    },
    {
        path: 'pg-login',
        component: PgLoginComponent,
    },
    {
        path:'pg-esqueci-senha',
        component: PgEsqueciSenhaComponent,
    },
    {
        path:'pg-sobre-nos',
        component: PgSobreNosComponent,
    },
    {
        path:'footer-principal',
        component: FooterPrincipalComponent,
    },
    {
        path:'pg-termos-servico',
        component: PgTermosServicoComponent,
    },
    {
        path:'pg-politica-priv',
        component: PgPoliticaPrivComponent,
    },
    {
        path:'pg-seguranca',
        component: PgSegurancaComponent,
    },
    {
        path:'pg-contato',
        component: PgContatoComponent,
    },
    {
        path:'buscar-servicos',
        component: BuscarServicosComponent,
    },
    {
        path:'pg-usuario',
        component: PgUsuarioComponent,
    }
];

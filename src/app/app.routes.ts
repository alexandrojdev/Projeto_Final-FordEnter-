import { Routes } from '@angular/router';
import { PgCadastroComponent } from './pg-cadastro/pg-cadastro.component';
import { PgHomeComponent } from './componentes/pg-home/pg-home.component';

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
    }
];

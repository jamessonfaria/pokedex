import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'pokedex',
        //loadChildren: './modules/pokedex/pokedex.module#PokedexModule'
        loadChildren: () => import(`src/app/modules/pokedex/pokedex.module`)
            .then(m => m.PokedexModule)
    },
    {
        path: '**',
        redirectTo: 'pokedex',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, NgModule } from "@angular/core"
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router"
import { CategoriaListaComponent } from './pages/categoria-lista/categoria-lista.component';
import { CategoriaVisualizarComponent } from './pages/categoria-visualizar/categoria-visualizar.component';

@Component({
  template: '<router-outlet></router-outlet>',
})
export class GenericRouterComponent { }

const routes: Routes = [
  {
    path: 'categoria',
    children: [
      { path: '', redirectTo: '/categoria/lista', pathMatch: 'full' },
      { path: 'lista', component: CategoriaListaComponent },
      { path: 'visualizar/:idCategoria', component: CategoriaVisualizarComponent },
    ]
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
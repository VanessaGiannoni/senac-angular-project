import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListaComponent } from './pages/produto-lista/produto-lista.component';

@Component({
  template: '<router-outlet></router-outlet>',
})
export class GenericRouterComponent { }

const routes: Routes = [
  {
    path: 'produto',
    children: [
      { path: '', redirectTo: '/produto/lista', pathMatch: 'full' },
      { path: 'lista', component: ProdutoListaComponent },
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
export class ProdutoRoutingModule { }
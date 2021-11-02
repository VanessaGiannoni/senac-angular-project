import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoRoutingModule, GenericRouterComponent } from './produto-routing.module';
import { ProdutoListaComponent } from './pages/produto-lista/produto-lista.component';



@NgModule({
  declarations: [
    GenericRouterComponent,
    ProdutoListaComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule { }

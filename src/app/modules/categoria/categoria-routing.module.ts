import { Component, NgModule } from "@angular/core"
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router"
import { CategoriaListaComponent } from './pages/categoria-lista/categoria-lista.component';

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
    ]
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    // CategoriaListaComponent
  ],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
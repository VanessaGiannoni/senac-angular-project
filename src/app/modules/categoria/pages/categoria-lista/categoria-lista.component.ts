import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../service/categoria.service';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.css']
})
export class CategoriaListaComponent implements OnInit {
  categoria: any[] = [];
  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.categoriaService
        .getAll()
        .then(response => {
          this.categoria = response.content;
        })
        .catch((err) => { console.log('Erro: ', err) })
  }
}

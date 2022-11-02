import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];

  // injeção de dependência do serviço que se comunica com a API
  constructor(private service: PensamentoService) { }

  // método que é executado quando o componente é carregado
  ngOnInit(): void {
    this.service.listar().subscribe( dados => {
      this.listaPensamentos = dados;
    });
  }

}

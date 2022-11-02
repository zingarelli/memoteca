import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  // decorator para que um componente externo possa modificar esse objeto
  @Input() pensamento: Pensamento = {
    conteudo: 'I S2 Angular',
    autoria: 'Instrutora',
    modelo: 'modelo3',
    id: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  // informa qual classe CSS usar baseado no tamanho do conteúdo
  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
      return 'pensamento-p'
  }

}

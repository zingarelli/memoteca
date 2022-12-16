import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }
  // injeção de dependência do serviço que se comunica com a API
  // e do roteador para redirecionamento de página
  // ActivatedRoute permite ver informações sobre os pensamentos na rota atual
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // id recebido pela URL
    const id = this.route.snapshot.paramMap.get('id');

    // busca o pensamento na base
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }

  editarPensamento() {
    // se o pensamento foi encontrado na base
    if(this.pensamento.id){
      this.service.editar(this.pensamento).subscribe(() => {
        alert('Item successfully edited!')
        this.router.navigate(['/listarPensamento']);
      })
    }
    else {
      console.log('[ERRO]: Pensamento não encontrado na base de dados.');
      this.router.navigate(['/listarPensamento']);
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }

}

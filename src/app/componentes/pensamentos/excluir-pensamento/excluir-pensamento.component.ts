import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

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
    // snapshot traz informações da rota no momento em que é acessado
    // paramMap traz os parâmetros que foram passados para a rota
    const id = this.route.snapshot.paramMap.get('id')

    // busca o pensamento na base para ver se ele existe
    // TODO: tratar exceção quando não existe
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }

  // faz exclusão de um pensamento e retorna para o mural
  excluirPensamento() {
    // se o id passado foi válido e retornou o pensamento, prossegue com a exclusão
    if(this.pensamento.id){
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
    }
    else {
      console.log('[ERRO] Pensamento não encontrado na base de dados.');
      this.router.navigate(['/listarPensamento'])
    }
  }

  // volta para o mural
  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }

}

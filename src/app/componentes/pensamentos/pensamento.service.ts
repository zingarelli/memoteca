import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

// serviço que pode ser injetado em toda a aplicação (root)
@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  // URL da API
  private readonly API = 'http://localhost:3000/pensamentos'
  
  // injeção de dependência do HttpClient para possibilitar 
  // uso de funções dessa classe para fazer o CRUD da aplicação
  constructor(private http: HttpClient) { }

  /* Métodos CRUD (Create, Read, Update, Delete) */

  // CREATE: cria um pensamento novo, aproveitando da dependência 
  // injetada para utilizar os métodos do HttpClient
  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento);
  }

  // READ: ler dados de uma API,  utilizando os métodos
  // do HttpClient
  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API);
  }

  // UPDATE: edita um pensamento e atualiza na base
  editar(pensamento: Pensamento): Observable<Pensamento> {
    // url completa para o pensamento a ser editado
    const url = `${this.API}/${pensamento.id}`;
    return this.http.put<Pensamento>(url, pensamento);
  } 

  // DELETE: apaga um pensamento da base, de acordo com o Id
  excluir(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Pensamento>(url);
  }


  // método auxiliar para edição/exclusão. Retorna um pensamento
  // de acordo com o Id passado
  buscarPorId(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.get<Pensamento>(url);
  }
}

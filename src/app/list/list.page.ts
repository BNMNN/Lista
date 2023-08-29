import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Itens } from '../model/item.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  meusItens:Itens[] = [];
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Itens[]>('http://localhost:3000/itens').subscribe(caixinha => this.meusItens = caixinha );
  }

  deletar(id:any){
    this.http.delete('http://localhost:3000/itens/' + id).subscribe();

    /* Definir um tempo de 2 segundo para atualizar a pagina */
    setTimeout(this.refresh,1000);
  }

  /* Método de refresh */
  refresh(){
    /* Funçao JS - Atualiza a pagina */
    location.reload();
  }
}

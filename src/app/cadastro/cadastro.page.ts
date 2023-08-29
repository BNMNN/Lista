import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  nameButton = "Adicionar à Lista";
  
  constructor(private http:HttpClient) { }

  cadastro(form:any){

    this.http.post('http://localhost:3000/itens',form.value, this.httpOptions).subscribe();
    setTimeout(this.refresh,1000);
  } 
 
  refresh(){
    location.reload();
  }

  
}

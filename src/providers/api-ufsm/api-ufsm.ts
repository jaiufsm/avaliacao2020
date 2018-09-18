import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trabalho } from '../../interfaces/trabalho';
import { LocalDataProvider } from '../local-data/local-data';

/*
  Generated class for the ApiUfsmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiUfsmProvider {

  private trabalhos: Array<Trabalho>;
  private readonly url: string;
  private readonly headers: HttpHeaders;

  constructor(public http: HttpClient, private localDataProvider: LocalDataProvider) {
    console.log('Hello ApiUfsmProvider Provider');
    this.url = "";
    let token = "";
    let deviceID = "";
    this.headers = new HttpHeaders({
      'X-UFSM-Access-Token': token,
      'X-UFSM-Device-ID': deviceID
    });
  }

  public ngOnInit(){
    this.http.get(this.url, {headers: this.headers}).subscribe((response: JsonResponse) => {
      if(!response.error){
        this.updateTrabalhos(response.trabalhos);
      }
    });
  }

  /**
   * A função sempre atualiza os trabalhos salvos localmente com os dados
   * retornados pela requisição ao servidor, alternativamente, pode ser
   * alterada para atualizar somente os dados faltantes.
   * @param trabalhos 
   */
  private updateTrabalhos(trabalhos: Array<Trabalho>){
    this.localDataProvider.setTrabalhos(trabalhos);
  }

  public getTrabalhos(){
    return this.trabalhos;
  }

}

interface JsonResponse{
  id: number,
  error: boolean,
  codigo: number,
  mensagem: string,
  trabalhos: Array<Trabalho>,
  errorEntity: boolean
}

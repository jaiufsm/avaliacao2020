import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trabalho } from '../../interfaces/trabalho';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { LocalDataProvider } from '../local-data/local-data';

/*
  Generated class for the ApiUfsmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiUfsmProvider {

  //private trabalhos: Array<Trabalho>;
  private readonly url: string;
  private readonly headers: HttpHeaders;
  private trabalhosObs: BehaviorSubject<Array<Trabalho>>;

  constructor(public http: HttpClient, public localDataProvider: LocalDataProvider) {
    console.log('Hello ApiUfsmProvider Provider');
    this.url = "https://raw.githubusercontent.com/Felipe-Marin/pwa-jai-ufsm/master/api.json";
    let token = "";
    let deviceID = "";
    this.headers = new HttpHeaders({
      'X-UFSM-Access-Token': token,
      'X-UFSM-Device-ID': deviceID
    });
    this.trabalhosObs = new BehaviorSubject([]);
  }

  public getTrabalhos(){
    this.http.get(this.url).subscribe((response: JsonResponse) => {
      if(!response.error){
        this.trabalhosObs.next(response.trabalhos);
        this.localDataProvider.setTrabalhos(response.trabalhos)
          .then(()=>console.log("OK"))
          .catch(console.error);
      }
    });
    return this.trabalhosObs;
  }

   /**
   * A função sempre atualiza os trabalhos salvos localmente com os dados
   * retornados pela requisição ao servidor, alternativamente, pode ser
   * alterada para atualizar somente os dados faltantes.
   * @param trabalhos 
   *
  private updateTrabalhos(){
    let trabalhos = this.apiUfsmProvider.getTrabalhos;
    if(trabalhos){
      this.setTrabalhos(trabalhos);
    }
  }*/

}

interface JsonResponse{
  id: number,
  error: boolean,
  codigo: number,
  mensagem: string,
  trabalhos: Array<Trabalho>,
  errorEntity: boolean
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trabalho } from '../../interfaces/trabalho';
import { Avaliacao, Estado } from '../../interfaces/avaliacao';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { LocalDataProvider } from '../local-data/local-data';
import { fromEvent } from 'rxjs/observable/fromEvent';

/*
  Generated class for the ApiUfsmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiUfsmProvider {

  //private trabalhos: Array<Trabalho>;
  private readonly url: string;
  //private readonly headers: HttpHeaders;
  private trabalhosObs: BehaviorSubject<Array<Trabalho>>;

  constructor(public http: HttpClient, public localDataProvider: LocalDataProvider) {
    console.log('Hello ApiUfsmProvider Provider');
    this.url = "https://raw.githubusercontent.com/Felipe-Marin/pwa-jai-ufsm/master/api.json";
    /*let token = "";
    let deviceID = "";
    this.headers = new HttpHeaders({
      'X-UFSM-Access-Token': token,
      'X-UFSM-Device-ID': deviceID
    });*/
    this.trabalhosObs = new BehaviorSubject([]);
    fromEvent(window, 'online').subscribe(()=>{
      this.sendAvaliacoes();
    });
  }

  ngOnInit(){
    if(navigator.onLine){
      this.sendAvaliacoes();
    }
  }

  public getTrabalhos(){
    this.http.get(this.url).subscribe((response: JsonResponse) => {
      if(!response.error){
        let trabalhos = response.trabalhos;
        let avaliacoes = new Array<Avaliacao>();
        for(let i = 0; i < trabalhos.length; i++){
          this.localDataProvider.getAvaliacao(trabalhos[i].id).then(avaliacao => {
            if(!avaliacao){
              let avaliacao = {
                trabalho: trabalhos[i].id,
                estado: Estado["Não Avaliado"],
                respostas: new Array<string>(trabalhos[i].perguntas.length)
              }
              avaliacoes.push(avaliacao);
            }
          });   
        }
        this.localDataProvider.setTrabalhos(trabalhos).then(()=>{
          this.localDataProvider.setAvaliacoes(avaliacoes).then(()=>{
            this.trabalhosObs.next(trabalhos);
          });
        });
      }else{
        this.getTrabalhosLocal();
      }
    }, err => {
      console.log(err);
      this.getTrabalhosLocal();
    });
    return this.trabalhosObs;
  }

  private getTrabalhosLocal(){
    this.localDataProvider.getTrabalhos().then(trabalhos => {
      this.trabalhosObs.next(trabalhos);
    });
  }

  public setAvaliacao(avaliacao: Avaliacao){
    console.log('setavaliacao');
    let sendAvaliacao = new Promise((resolve, reject) => {
      if(navigator.onLine){
        console.log('online');
        avaliacao.estado = Estado["Avaliado e Enviado"];

        /// Begin googleForms test
        let formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfc1V0zMpY4E49ZfPT6g7ok0oZ707fAZH_V9VgCjqLbuyvAjg/formResponse";
        let formBody = {
          "entry.931167567":"testecomtypescript",
          "entry.1091362213":"testando",
          "entry.459559554":"C",
          "entry.1977341862":"D",
          "entry.673029848":"E",
          "entry.1465874438":"A",
          "entry.1043619085":"B",
          "entry.667784152":"3",
          "entry.339752743":"4",
          "entry.1977078333":"5",
          "entry.291279887":"trab",
          "entry.1952743550":"aval",
          "entry.1725844449":"eu"
        };
        let formBody="entry.931167567=A&entry.1091362213=B&entry.459559554=C&entry.1977341862=D&entry.673029848=E&entry.1465874438=A&entry.1043619085=B&entry.667784152=3&entry.339752743=4&entry.1977078333=5&entry.291279887=trab&entry.1952743550=aval&entry.1725844449=eu"
        let headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'});
        
        let options = { headers: headers };
        let postOnGoogleForms = this.http.post(formUrl, formBody, options);

        postOnGoogleForms.subscribe((response: googleResponse) => {
          if(response.success){
            console.log('postOnGoogleForms')
          }else{
            //console.log(response.erro);
            console.log('erro no postOnGoogleForms');
          }
        }, err => {
          console.log(err);
          if(!navigator.onLine){
            console.log("Erro ao entrar: Não há conexão com a internet");
          }else{
            console.log("Erro ao entrar: Tente novamente mais tarde");
          }
      
        });


        /// End GoogleForms test


        this.localDataProvider.setAvaliacao(avaliacao.trabalho, avaliacao).then(()=>{
          console.log('success');
          resolve();
        }, err => {
          console.log('erro');
          console.log(err);
        });
      }else{
        console.log('offline');
        avaliacao.estado = Estado["Avaliado mas não enviado"];
        this.localDataProvider.setAvaliacao(avaliacao.trabalho, avaliacao).then(()=>{
          reject();
        });
      }
    });
    return sendAvaliacao;
  }

  private sendAvaliacoes(){
    this.localDataProvider.getAvaliacoesPendentes().then(avaliacoesPendentes => {
      for(let i = 0; i < avaliacoesPendentes.length; i++){
        this.setAvaliacao(avaliacoesPendentes[i]).then(()=>{
          console.log('avaliacao pendente enviada');
        });
      }
    });
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


interface googleResponse{
  'success': boolean
}
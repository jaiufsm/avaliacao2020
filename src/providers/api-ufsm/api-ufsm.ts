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

  constructor(public localDataProvider: LocalDataProvider) {
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
/*
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
                tituloTrabalho: trabalhos[i].titulo,
                avaliador: '',
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
  }*/

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

        /// Begin googleForms test
        let formUrl = "https://script.google.com/macros/s/AKfycbzdEAUndj-OtgytCTu59HZn2xOefjB9kOTEHjTDms6UQ8hpLX0/exec";
        let respostas = avaliacao.respostas;
        let formBody = new URLSearchParams();
        /*let questoes = {
          q1: respostas[0],
          q2: respostas[1],
          q3: respostas[2],
          q4: respostas[3],
          q5: respostas[4],
          q6: respostas[5],
          q7: respostas[6],
          q8: respostas[7],
          q9: respostas[8],
          q10: respostas[9],
        };*/
        formBody.append("q1", respostas[0]);
        formBody.append("q2", respostas[1]);
        formBody.append("q3", respostas[2]);
        formBody.append("q4", respostas[3]);
        formBody.append("q5", respostas[4]);
        formBody.append("q6", respostas[5]);
        formBody.append("q7", respostas[6]);
        formBody.append("q8", respostas[7]);
        formBody.append("q9", respostas[8]);
        formBody.append("q10", respostas[9]);
        formBody.append("idTrabalho", String(avaliacao.trabalho));
        formBody.append("nomeTrabalho", avaliacao.tituloTrabalho);
        formBody.append("avaliadorOriginal", avaliacao.avaliador);
        formBody.append("avaliadorReal", avaliacao.avaliadorReal);
        //formBody.append("questoes", JSON.stringify(questoes));
        formBody.append("estado", avaliacao.tipo);
        formBody.append("type", "setAvaliacao");

    
        //let postOnGoogleForms = this.http.post(formUrl, formBody);

        fetch('https://script.google.com/macros/s/AKfycbzdEAUndj-OtgytCTu59HZn2xOefjB9kOTEHjTDms6UQ8hpLX0/exec', 
        { method: 'POST', redirect: 'follow', body: formBody })
          .then((response:any) => {
            response.json().then(jsonResponse => {
              if(response.success){
                avaliacao.estado = Estado["Avaliado e Enviado"];
                this.localDataProvider.setAvaliacao(avaliacao.trabalho, avaliacao).then(()=>{
                  console.log('success');
                  resolve();
                }, err => {
                  console.log('erro');
                  console.log(err);
                });
              }
            });
          
          }, err => {
            console.log(err);
          if(err.statusText == "Unknown Error"){
            avaliacao.estado = Estado["Avaliado e Enviado"];
            this.localDataProvider.setAvaliacao(avaliacao.trabalho, avaliacao).then(()=>{
              console.log('success');
              resolve();
            }, err => {
              console.log('erro');
              console.log(err);
            });
          }else{
            console.log("Erro: Tente novamente mais tarde");
            avaliacao.estado = Estado["Avaliado mas não enviado"];
            this.localDataProvider.setAvaliacao(avaliacao.trabalho, avaliacao).then(()=>{
              reject();
            });
          }
          });

        /*postOnGoogleForms.subscribe((response: googleResponse) => {
          if(response.success){
            console.log('postOnGoogleForms')
          }else{
            //console.log(response.erro);
            console.log('erro no postOnGoogleForms');
          }
        }, err => {
          console.log(err);
          if(err.statusText == "Unknown Error"){
            avaliacao.estado = Estado["Avaliado e Enviado"];
            this.localDataProvider.setAvaliacao(avaliacao.trabalho, avaliacao).then(()=>{
              console.log('success');
              resolve();
            }, err => {
              console.log('erro');
              console.log(err);
            });
          }else{
            console.log("Erro: Tente novamente mais tarde");
            avaliacao.estado = Estado["Avaliado mas não enviado"];
            this.localDataProvider.setAvaliacao(avaliacao.trabalho, avaliacao).then(()=>{
              reject();
            });
          }
      
        }); */
        /// End GoogleForms test
        
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

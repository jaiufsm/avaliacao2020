import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForage } from "ngforage";
import { Trabalho } from '../../interfaces/trabalho';
import { Avaliacao, Estado } from '../../interfaces/avaliacao';

/*
  Generated class for the LocalDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalDataProvider {

  readonly trabalhosDB: string;
  readonly avaliacoesDB: string;

  constructor(public http: HttpClient, public ngf: NgForage) {
    console.log('Hello LocalDataProvider Provider');
    this.trabalhosDB = 'trabalhos';
    this.avaliacoesDB = 'avaliacoes';
  }

  public ngOnInit(){
    this.ngf.name = 'JAI';
  }

  public getTrabalhos<T = Array<Trabalho>>(): Promise<T>{
    //this.ngf.storeName = 'trabalhos';
    return this.ngf.getItem<T>(this.trabalhosDB);
  }

  public setTrabalhos<T = Array<Trabalho>>(trabalhos: T){
    //this.ngf.storeName = 'trabalhos';
    return this.ngf.setItem<T>(this.trabalhosDB, trabalhos);
  }

  public getAvaliacao<T = Avaliacao>(id: number): Promise<T>{
    //this.ngf.storeName = 'avaliacoes';
    return this.ngf.getItem<T>(String(id));
  }

  public setAvaliacao<T = Avaliacao>(id: number, avaliacao: T){
    console.log('localdata>setavaliacao');
    //this.ngf.storeName = 'avaliacoes';
    return this.ngf.setItem<T>(String(id), avaliacao);
  }

  public setAvaliacoes(avaliacoes: Array<Avaliacao>){
    let avaliacaoPromiseList = new Array<Promise<Avaliacao>>();
    for(let i=0; i < avaliacoes.length; i++){
      let promise = this.ngf.setItem<Avaliacao>(String(avaliacoes[i].trabalho), avaliacoes[i]);
      avaliacaoPromiseList.push(promise);
    }
    return Promise.all(avaliacaoPromiseList);
  }

  public getAvaliacoesPendentes(){
    //this.ngf.storeName = 'avaliacoes';
    let getAvaliacoesPromise = new Promise<Array<Avaliacao>>((resolve, reject) => {
      let avaliacoes = new Array<Avaliacao>();
      this.ngf.iterate((value: Avaliacao, key, iterationNumber) => {
        if(value.estado == Estado["Não Enviado"]){
          avaliacoes.push(value);
        }
      }).then(()=>{
        resolve(avaliacoes);
      }, err => {
        reject();
      });
    });
    return getAvaliacoesPromise;
    
  }

  public getEstados(){
    let getEstadosPromise = new Promise<Array<string>>((resolve, reject) => {
      let estados = new Array<string>();
      this.ngf.iterate((value: Avaliacao, key, iterationNumber) => {
        estados.push(Estado[value.estado]);
      }).then(()=>{
        resolve(estados);
      }, err => {
        reject();
      });
    });
    return getEstadosPromise;
  }

}

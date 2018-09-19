import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForage } from "ngforage";
import { Trabalho } from '../../interfaces/trabalho';
import { Avaliacao } from '../../interfaces/avaliacao';

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
    this.ngf.name = 'JAI UFSM';
  }

  public getTrabalhos<T = Array<Trabalho>>(): Promise<T>{
    return this.ngf.getItem<T>(this.trabalhosDB);
  }

  public setTrabalhos<T = Array<Trabalho>>(trabalhos: T){
    return this.ngf.setItem<T>(this.trabalhosDB, trabalhos);
  }

  public getAvaliacoes<T = Array<Avaliacao>>(): Promise<T>{
    return this.ngf.getItem<T>(this.avaliacoesDB);
  }

  public setAvaliacoes<T = Array<Avaliacao>>(avaliacoes: T){
    return this.ngf.setItem<T>(this.avaliacoesDB, avaliacoes);
  }

}

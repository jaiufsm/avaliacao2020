import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Keyboard, ToastController } from 'ionic-angular';
import { Trabalho } from '../../interfaces/trabalho';
import { Pergunta } from '../../interfaces/pergunta';
import { Avaliacao, Estado } from '../../interfaces/avaliacao';
import { LocalDataProvider } from '../../providers/local-data/local-data';
import { ApiUfsmProvider } from '../../providers/api-ufsm/api-ufsm';

/**
 * Generated class for the QuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {

  questions: Array<Pergunta>;
  avaliacao: Avaliacao;
  trabalho: Trabalho;
  rangeValue: number;
  radioValue: string;
  @ViewChild(Slides) slides: Slides;
  slidesIndex: number;
  slidesLength: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public keyboard: Keyboard, 
    private localDataProvider: LocalDataProvider, private apiUfsmProvider: ApiUfsmProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
  }

  ngOnInit(){
    if(this.navParams.data.trabalho){
      this.trabalho = this.navParams.data.trabalho;
      this.questions = this.trabalho.perguntas;
      this.slidesIndex = 1;
      this.slidesLength = this.questions.length + 1;
      this.initQuestions();
      this.avaliacao = {
        trabalho: this.trabalho.id,
        estado: Estado["Não Avaliado"],
        respostas: new Array<string>(this.questions.length)
      };
      this.localDataProvider.getAvaliacao(this.avaliacao.trabalho).then(avaliacao => {
        if(avaliacao){
          this.avaliacao = avaliacao;
        }
      });
    }

  }

  private initQuestions(){
    for(let i = 0; i < this.questions.length; i++){
      if(this.questions[i].discursiva == true){
        this.questions[i].tipo = 1;
      }
      else{
        this.questions[i].listaRespostas = this.questions[i].respostas.split(';');
        this.questions[i].tipo = this.getQuestionType(this.questions[i].listaRespostas);
      }
    }
  
  }

  private getQuestionType(listaRespostas: Array<string>){
    for(let i=0; i < listaRespostas.length; i++) {
      if(Number.isNaN(Number(listaRespostas[i]))){
        return 3;
      }else{
        return 2;
      }
    }
  }

  public setAvaliacao(){
    let index = this.slides.getActiveIndex();
    console.log('setavaliacao');
    this.apiUfsmProvider.setAvaliacao(this.avaliacao).then(()=> {
      this.presentToast('Avaliação enviada com sucesso.');
      this.navCtrl.goToRoot({});
    }, err => {
      this.presentToast('Não foi possível enviar a avaliação. Uma nova tentativa de envio será feita automaticamente quando houver conexão a internet.');
      this.navCtrl.goToRoot({});
    });
  }

  private presentToast(message: string){
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  public slidesBack(){
    this.slides.slidePrev();
  }

  public slidesForward(){
    this.slides.slideNext();
  }

  public slideTo(index: number){
    this.slides.slideTo(index);
  }

  public slideChanged(){
    this.slidesIndex = this.slides.getActiveIndex() + 1;
  }

}
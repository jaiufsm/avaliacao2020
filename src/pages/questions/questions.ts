import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Keyboard } from 'ionic-angular';

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
  trabalho: Trabalho;
  rangeValue: number;
  radioValue: string;
  @ViewChild(Slides) slides: Slides;
  slidesIndex: number;
  slidesLength: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public keyboard: Keyboard) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
  }

  ngOnInit(){
    if(this.navParams.data.trabalho){
      this.trabalho = this.navParams.data.trabalho;
      this.questions = this.trabalho.perguntas;
    }
    this.slidesIndex = 1;
    this.slidesLength = this.questions.length;
    this.initQuestions();
  }

  initQuestions(){
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

  getQuestionType(listaRespostas: Array<string>){
    for(let i=0; i < listaRespostas.length; i++) {
      if(Number.isNaN(Number(listaRespostas[i]))){
        return 3;
      }else{
        return 2;
      }
    }
  }

  slidesBack(){
    this.slides.slidePrev();
  }

  slidesForward(){
    this.slides.slideNext();
  }

  slideChanged(){
    this.slidesIndex = this.slides.getActiveIndex() + 1;
  }

}

interface Pergunta{
  discursiva: boolean, 
  id: number, 
  nome: string, 
  respostas: string,
  listaRespostas: Array<string>,
  tipo: number
}

interface Trabalho{
  id: number,
  titulo: string,
  apresentador: string,
  apresentacao: {data: string, predio: string, sala:string},
  perguntas: Array<Pergunta>
}
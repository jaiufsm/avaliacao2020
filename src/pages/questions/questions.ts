import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

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

  questions: Array<Pergunta>
  rangeValue: number;
  radioValue: string;
  @ViewChild(Slides) slides: Slides;
  slidesIndex: number;
  slidesLength: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.questions = this.navParams.data.questions;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
  }

  ngOnInit(){
    this.slidesIndex = 1;
    this.slidesLength = 3;
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
  respostas: string
}

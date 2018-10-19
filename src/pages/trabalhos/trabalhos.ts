import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { QuestionsPage } from './../questions/questions';
import { Trabalho } from '../../interfaces/trabalho';
import { ApiUfsmProvider } from '../../providers/api-ufsm/api-ufsm';
import { LocalDataProvider } from '../../providers/local-data/local-data';
import { LoginPage } from '../login/login';

/**
 * Generated class for the TrabalhosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trabalhos',
  templateUrl: 'trabalhos.html',
})
export class TrabalhosPage {

  public trabalhos: Array<Trabalho>;
  public estados: Array<string>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public apiUfsmProvider: ApiUfsmProvider,
    public localDataProvider: LocalDataProvider,
    private loadingCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrabalhosPage');
  }

  ngOnInit(){
    let loader = this.loadingCtrl.create({
      content: "Carregando...",
      duration: 10000
    });
    loader.present();
    this.apiUfsmProvider.getTrabalhos().subscribe(trabalhos => {
      this.trabalhos = trabalhos;
      this.localDataProvider.getEstados().then(estados => {
        this.estados = estados;
        loader.dismiss().catch(() => {});
      });
    });
  }

  goToQuestions(trabalho: Trabalho) {
    this.navCtrl.push(QuestionsPage, { trabalho: trabalho });
  }

  doLogout(){
    this.navCtrl.setRoot(LoginPage);
  }

}
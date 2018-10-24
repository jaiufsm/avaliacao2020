import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { TrabalhosPage } from '../trabalhos/trabalhos';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  login: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http: HttpClient, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin(){
    let loader = this.loadingCtrl.create({
      content: "Carregando...",
      duration: 30000
    });
    loader.present();
    let url = "https://jai-ufsm2.herokuapp.com/jai/avaliacaoRest/login";
    //let url = "http://127.0.0.1:5000/jai/avaliacaoRest/login";
    let body = {
      "login": this.login,
      "password": this.password
    };
    let postLogin = this.http.post(url, body);
    postLogin.subscribe((response: loginResponse) => {
      if(response.success){
        loader.dismiss().catch(() => {});
        let data = {nome: response.nome, trabalhos: response.trabalhos};
        this.navCtrl.setRoot(TrabalhosPage, data);
      }else{
        loader.dismiss().catch(() => {});
        this.showAlert("Erro ao entrar", response.erro);
      }
    }, err => {
      console.log(err);
      if(!navigator.onLine){
        loader.dismiss().catch(() => {});
        this.showAlert("Erro ao entrar", "Não há conexão com a internet");
      }else{
        loader.dismiss().catch(() => {});
        this.showAlert("Erro ao entrar", "Tente novamente mais tarde");
      }
      
    });
  }

  showAlert(title: string, subtitle: string) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['OK']
    });
    alert.present();
  }

}

interface loginResponse{
  'success': boolean,
  'trabalhos'?: Array<any>,
  'nome'?: string,
  'erro'?: string
}

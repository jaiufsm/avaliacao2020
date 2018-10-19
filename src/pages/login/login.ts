import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { TrabalhosPage } from '../trabalhos/trabalhos';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  login: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin(){
    let url = "https://jai-ufsm.herokuapp.com/jai/avaliacaoRest/login";
    let body = {
      "login": this.login,
      "password": this.password
    };
    let postLogin = this.http.post(url, body);
    postLogin.subscribe((response: loginResponse) => {
      if(response.success){
        //let data = {nome: response.nome, trabalhos: response.trabalhos};
        this.navCtrl.setRoot(TrabalhosPage, {nome: response.nome});
      }else{
        this.showAlert("Erro ao entrar", response.erro);
      }
    }, err => {
      console.log(err);
      if(!navigator.onLine){
        this.showAlert("Erro ao entrar", "Não há conexão com a internet");
      }else{
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
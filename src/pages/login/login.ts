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
    let body = new URLSearchParams();
    body.append('login', this.login);
    body.append('password', this.password);
    body.append('type', 'doLoginAvaliador');
    fetch('https://script.google.com/macros/s/AKfycbyk7ohDB0YxOmRIxWL3msAARpwaL2bJ4F3YFzLzmB_5ybO3Pc1X/exec', 
    { method: 'POST', redirect: 'follow', body: body })
      .then((response:any) => {
        response.json().then(jsonResponse => {
          if(jsonResponse.success) {
            let nome = jsonResponse.trabalhos[0][0];
            let trabalhos = [];
            for(let trabalho of jsonResponse.trabalhos) {
              trabalhos.push({
                id: trabalho[2],
                titulo: trabalho[3],
                apresentador: trabalho[4],
                evento: trabalho[6],
                dia: trabalho[7],
                horario: trabalho[8],
                predio: trabalho[9],
                sala: trabalho[10],
                painel: trabalho[11],
                tipo_form: trabalho[14]
              });
            }
            let data = {nome: nome, trabalhos: trabalhos};
            loader.dismiss().catch(() => {});
            this.navCtrl.setRoot(TrabalhosPage, data);
          } else {
            loader.dismiss().catch(() => {});
            this.showAlert("Erro ao entrar", jsonResponse.message);
          }
        
        });
      },  err => {
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

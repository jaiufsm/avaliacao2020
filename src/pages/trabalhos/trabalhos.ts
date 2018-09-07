import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionsPage } from './../questions/questions';

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

  trabalhos: Array<Trabalho>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrabalhosPage');
  }

  ngOnInit(){
    this.trabalhos = [
      {
        "id": 25424,
        "titulo": "SOBRE JORNALISTAS MILITANTES: FORMAÇÃO, PARTICIPAÇÃO E JORNALISMO EM MOVIMENTOS SOCIAIS",
        "apresentador": "JULIA MARA SAGGIORATTO",
        "apresentacao": {
            "data": "2018-05-11T09:12:43.435",
            "predio": "CSSH 74A",
            "sala": "Painel 12"
        },
        "perguntas": [
            {
                "discursiva": true,
                "id": 121,
                "nome": "Preencha o campo ao lado com a palavra 'APROVADO' e, caso deseje, faça um comentário sobre a qualidade do trabalho. Caso o trabalho necessite revisão ou não seja aprovado, use o campo para escrever sua justificativa.",
                "respostas": null
            },
            {
                "discursiva": false,
                "id": 141,
                "nome": "Na sua opinião, o trabalho é bom?",
                "respostas": "0;1;2;3;4;5"
            },
            {
              "discursiva": false,
              "id": 154,
              "nome": "Pergunta 3",
              "respostas": "alternativa 1;alternativa 2;alternativa 3;alternativa 4"
            }
        ]
      },
      {
        "id": 25424,
        "titulo": "TRABALHO 2",
        "apresentador": "APRESENTADOR 2",
        "apresentacao": {
            "data": "2018-05-11T09:12:43.435",
            "predio": "CSSH 74A",
            "sala": "Painel 12"
        },
        "perguntas": [
            {
                "discursiva": true,
                "id": 121,
                "nome": "Preencha o campo ao lado com a palavra 'APROVADO' e, caso deseje, faça um comentário sobre a qualidade do trabalho. Caso o trabalho necessite revisão ou não seja aprovado, use o campo para escrever sua justificativa.",
                "respostas": null
            },
            {
                "discursiva": false,
                "id": 141,
                "nome": "Na sua opinião, o trabalho é bom?",
                "respostas": "0;1;2;3;4;5"
            }
        ]
      }
    ];
  }

  goToQuestions(trabalho: Trabalho) {
    this.navCtrl.push(QuestionsPage, { trabalho: trabalho });
  }

}

interface Trabalho{
  id: number,
  titulo: string,
  apresentador: string,
  apresentacao: {data: string, predio: string, sala:string},
  perguntas: Array<{discursiva: boolean, id: number, nome: string, respostas: string}>
}
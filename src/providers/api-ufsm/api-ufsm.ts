import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trabalho } from '../../interfaces/trabalho';

/*
  Generated class for the ApiUfsmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiUfsmProvider {

  private trabalhos: Array<Trabalho>;

  constructor(public http: HttpClient) {
    console.log('Hello ApiUfsmProvider Provider');
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
              "respostas": "alternativa 1; alternativa 2; alternativa 3; alternativa 4"
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

  public getTrabalhos(){
    return this.trabalhos;
  }

}

interface JsonResponse{
  id: number,
  error: boolean,
  codigo: number,
  mensagem: string,
  trabalhos: Array<Trabalho>,
  errorEntity: boolean
}

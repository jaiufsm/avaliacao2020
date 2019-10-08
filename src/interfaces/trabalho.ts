import { Pergunta } from "./pergunta";

export interface Trabalho{
    id: number,
    titulo: string,
    apresentador: string,
    evento: string,
    dia: string,
    horario: string,
    predio: string,
    sala?: string,
    painel?: string,
    tipo_form: string,
    //apresentacao: {data: string, predio: string, sala:string},
    perguntas: Array<Pergunta>
}

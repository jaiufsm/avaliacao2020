import { Pergunta } from "./pergunta";

export interface Trabalho{
    id: number,
    titulo: string,
    apresentador: string,
    evento: string,
    //apresentacao: {data: string, predio: string, sala:string},
    perguntas: Array<Pergunta>
}
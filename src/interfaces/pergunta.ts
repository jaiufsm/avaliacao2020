export interface Pergunta{
    discursiva: boolean, 
    id: number, 
    nome: string, 
    respostas: string,
    listaRespostas?: Array<string>,
    tipo?: number
}
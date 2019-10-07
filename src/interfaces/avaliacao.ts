export interface Avaliacao{
    trabalho: number,
    tituloTrabalho,
    avaliador: string,
    avaliadorReal?:string,
    respostas: Array<string>,
    estado: Estado,
    apresentadorAusente: boolean,
    posterAusente: boolean,
    apresentadorSubstituto: string,
    tipo: string
}

export enum Estado{
    "Não Avaliado",
    "Avaliado mas não enviado",
    "Avaliado e Enviado"
}

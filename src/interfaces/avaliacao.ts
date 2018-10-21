export interface Avaliacao{
    trabalho: number,
    tituloTrabalho,
    avaliador: string,
    avaliadorReal?:string,
    respostas: Array<string>,
    estado: Estado
}

export enum Estado{
    "Não Avaliado",
    "Avaliado mas não enviado",
    "Avaliado e Enviado"
}

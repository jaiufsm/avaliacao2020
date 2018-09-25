export interface Avaliacao{
    trabalho: number,
    respostas: Array<string>,
    estado: Estado
}

export enum Estado{
    "Não Avaliado",
    "Avaliado mas não enviado",
    "Avaliado e Enviado"
}

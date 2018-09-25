export interface Avaliacao{
    trabalho: number,
    respostas: Array<string>,
    estado: Estado
}

export enum Estado{
    "Não Avaliado",
    "Não Enviado",
    "Enviado"
}

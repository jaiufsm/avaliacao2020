export interface Avaliacao{
    trabalho: number,
    respostas: Array<string>,
    estado: Estado
}

export enum Estado{
    NaoAvaliado,
    NaoEnviado,
    Enviado
}

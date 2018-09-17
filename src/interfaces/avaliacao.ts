export interface Avaliacao{
    trabalho: number,
    respostas: Array<string>,
    estado: Estado
}

enum Estado{
    NaoAvaliado,
    NaoEnviado,
    Enviado
}

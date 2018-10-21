export interface Pergunta{
    discursiva: boolean, 
    id: number, 
    nome: string, 
    respostas: string,
    listaRespostas?: Array<string>,
    tipo?: number
}

export class Perguntas{
    public static perguntasIC = [
        {
            "discursiva": false,
            "id": 101,
            "nome": "1) O título do trabalho reflete seu conteúdo e as palavras usadas são adequadas?",
            "respostas": "A - Melhor;B;C;D;E - Pior"
        },
        {
            "discursiva": false,
            "id": 102,
            "nome": "2) O tema do trabalho é relevante na sua respectiva área do conhecimento?",
            "respostas": "A - Melhor;B;C;D;E - Pior"
        },
        {
            "discursiva": false,
            "id": 103,
            "nome": "3) A contextualização do trabalho com a literatura e/ou processos criativos existentes é feita de forma satisfatória?",
            "respostas": "A - Melhor;B;C;D;E - Pior"
        },
        {
            "discursiva": false,
            "id": 104,
            "nome": "4) A metodologia empregada no trabalho reflete o atual estado da arte na sua respectiva área do conhecimento?",
            "respostas": "A - Melhor;B;C;D;E - Pior"
        },
        {
            "discursiva": false,
            "id": 105,
            "nome": "5) Os resultados são apresentados de forma clara, estruturada e coerente, utilizando-se dos meios adequados (tabelas, gráficos, etc.)?",
            "respostas": "A - Melhor;B;C;D;E - Pior"
        },
        {
            "discursiva": false,
            "id": 106,
            "nome": "6) A discussão dos resultados enfatizou seus aspectos mais relevantes e suas limitações?",
            "respostas": "A - Melhor;B;C;D;E - Pior"
        },
        {
            "discursiva": false,
            "id": 107,
            "nome": "7) As conclusões do trabalho são coerentes com seus resultados, métodos e objetivos?",
            "respostas": "A - Melhor;B;C;D;E - Pior"
        },
        {
            "discursiva": false,
            "id": 108,
            "nome": "8) O pôster ou os slides continham as informações necessárias de forma sintética e objetiva?",
            "respostas": "A - Melhor;B;C;D;E - Pior"
        },
        {
            "discursiva": false,
            "id": 109,
            "nome": "9) O apresentador domina o conteúdo do trabalho apresentado?",
            "respostas": "A - Melhor;B;C;D;E - Pior"
        },
        {
            "discursiva": false,
            "id": 110,
            "nome": "10) Qual conceito o(a) Sr(a) daria para o trabalho/apresentador como um todo?",
            "respostas": "A - Melhor;B;C;D;E - Pior"
        }                                    
    ];

    public static perguntasExt = [
        {
            "discursiva": false,
            "id": 101,
            "nome": "1) O título do trabalho reflete seu conteúdo e as palavras usadas são adequadas?",
            "respostas": "A - Melhor;B;C;D;E - Pior"
        },
        {
            "discursiva": false,
            "id": 102,
            "nome": "2) O tema do trabalho é relevante na sua respectiva área do conhecimento e/ou apresenta possibilidade de trabalho interdisciplinar com outras áreas?",
            "respostas": "A - Melhor;B;C;D;E - Pior"
        },
        {
            "discursiva": false,
            "id": 103,
            "nome": "3) A proposta do trabalho compromete-se com as demandas da sociedade, promovendo intercâmbio de experiências e saberes entre Universidade e demais setores da sociedade?",
            "respostas": "A - Melhor;B;C;D;E - Pior"
        },
        {
            "discursiva": false,
            "id": 104,
            "nome": "4) As ações realizadas contribuem com: inclusão de grupos sociais; desenvolvimento de meios e processos de produção; inovação e construção de conhecimento; ou à ampliação de oportunidades educacionais e formativas?",
            "respostas": "A - Melhor;B;C;D;E - Pior"
        },
        {
            "discursiva": false,
            "id": 105,
            "nome": "5) Os resultados são apresentados de forma clara, estruturada e coerente, utilizando-se dos meios adequados?",
            "respostas": "A - Melhor;B;C;D;E - Pior"
        },
        {
            "discursiva": false,
            "id": 106,
            "nome": "6) A sistematização dos resultados enfatizou seus aspectos mais relevantes e suas limitações?",
            "respostas": "A - Melhor;B;C;D;E - Pior"
        },
        {
            "discursiva": false,
            "id": 107,
            "nome": "7) As conclusões do trabalho são coerentes com seus objetivos, ações e resultados?",
            "respostas": "A - Melhor;B;C;D;E - Pior"
        },
        {
            "discursiva": false,
            "id": 108,
            "nome": "8) O pôster ou os slides continham as informações necessárias de forma sintética e objetiva?",
            "respostas": "A - Melhor;B;C;D;E - Pior"
        },
        {
            "discursiva": false,
            "id": 109,
            "nome": "9) O apresentador domina o conteúdo do trabalho apresentado?",
            "respostas": "A - Melhor;B;C;D;E - Pior"
        },
        {
            "discursiva": false,
            "id": 110,
            "nome": "10) Qual nota o(a) Sr(a) daria para o trabalho/apresentador como um todo?",
            "respostas": "A - Melhor;B;C;D;E - Pior"
        }                                    
    ]
}
let quantidade_de_perguntas = 0;
let indices = [];

//funções de suporte
function gerar_numero_aleatorio(limite) {
    return Math.floor(Math.random() * limite);
}

function indice_ja_se_encontra(vetor, indice) {
    return vetor.includes(indice);
}

function embaralhar_vetor(v) {
    const tamanho = v.length;
    let indices = []
    while (indices.length < tamanho) {
        const valor = gerar_numero_aleatorio(tamanho);
        if (!indice_ja_se_encontra(indices, valor)) {
            indices.push(valor);
        }
    }
    let novo_vetor = [];

    for (let i = 0; i < tamanho; i++) {
        novo_vetor.push(v[indices[i]]);
    }
    return novo_vetor;
}

function gerar_ordem_das_perguntas() {
    while (indices.length < quantidade_de_perguntas) {
        const valor = gerar_numero_aleatorio(quantidade_de_perguntas);
        if (!indice_ja_se_encontra(indices, valor)) {
            indices.push(valor);
        }
    }
    return indices;
}

//formato de dados
function dados_json(pergunta, resposta_Correta, todas_as_respostas) {
    const data = {
        "pergunta": pergunta,
        "resposta": resposta_Correta,
        "todas_as_respostas": embaralhar_vetor(todas_as_respostas)
    }
    return JSON.stringify(data);
}

//cadastro de perguntas e respostas
function perguntas_e_respostas() {
    sessionStorage.setItem(0, dados_json(
        'Como se diz "ela"?',
        'she',
        ['she', 'he', 'it', 'they']
    ));
    sessionStorage.setItem(1, dados_json(
        'Como se diz "Como vai você?"',
        'How are you?',
        ['I am fine thanks.', 'How are you?', 'What your name?', 'Where are you?']
    ));
    sessionStorage.setItem(2, dados_json(
        'Como se diz "Eles estão na biblioteca."',
        'They are on library.',
        ['They are on library.', 'They are at a library.', 'He is on library.', 'She is on library.']
    ));
    sessionStorage.setItem(3, dados_json(
        'Como se diz "Eu amo jogar."',
        'I love to play.',
        ['I love to play.', 'I like to play.', 'I am like to play', 'I love to play video game']
    ));
    sessionStorage.setItem(4, dados_json(
        'Responda a pergunta: "I am very busy, but i am not tired. And you?"',
        'I am very busy and very tired.',
        ['Are you very busy?', 'I am very busy and very tired.', 'Oh, thank you very mutch.', 'This is Anna.']
    ));
}

//funcao principal a ser chamada
function configuracao_inicial() {
    quantidade_de_perguntas = 5;

    perguntas_e_respostas();
    gerar_ordem_das_perguntas();
    sessionStorage.setItem('indices', JSON.stringify(indices));
    sessionStorage.setItem('pontos', 0);
    sessionStorage.setItem('quantidade de perguntas', quantidade_de_perguntas)
    window.location.replace("../question/index.html");
}
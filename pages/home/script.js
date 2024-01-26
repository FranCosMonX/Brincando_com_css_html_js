const quantidade_de_perguntas = 2;
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
}

//funcao principal a ser chamada
function configuracao_inicial() {
    perguntas_e_respostas();
    gerar_ordem_das_perguntas();
    sessionStorage.setItem('indices', JSON.stringify(indices));
    sessionStorage.setItem('pontos', 0);
    window.location.replace("./pages/question/index.html");
}
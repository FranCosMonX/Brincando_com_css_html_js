const ordem_das_perguntas = JSON.parse(sessionStorage.getItem('indices')); //vetor de indices aleatorios
let indice_da_ordem_atual = parseInt(0); //iterar sobre o vetor de indices de forma crescente 0,1... object.length

function redirecionar() {
    window.location.replace("../score/index.html");
}

function mudar_estado_do_botao() {
    const botao = document.getElementById('btn-proximo');

    if (botao.disabled) botao.disabled = false;
    else botao.disabled = true;

}

function carregar_dados_da_questao() {
    const pergunta = JSON.parse(sessionStorage.getItem(ordem_das_perguntas[indice_da_ordem_atual])); //carregando a primeira pegunta

    const enumeracao = document.getElementById('enumeracao');
    const texto_enumeracao = "Questões " + (parseInt(indice_da_ordem_atual) + 1) + "/" + ordem_das_perguntas?.length;
    enumeracao.innerText = texto_enumeracao;

    const enunciado = document.getElementById('enunciado');
    const texto_enunciado = "<p>" + pergunta?.pergunta + "</p>";
    enunciado.innerHTML = texto_enunciado;

    const alternativas = pergunta.todas_as_respostas;

    const alternativa_um = document.getElementById('A');
    const texto_A = "<p>" + alternativas[0] + "</p>";
    alternativa_um.innerHTML = texto_A;

    const alternativa_dois = document.getElementById('B');
    const texto_B = "<p>" + alternativas[1] + "</p>";
    alternativa_dois.innerHTML = texto_B;

    const alternativa_tres = document.getElementById('C');
    const texto_C = "<p>" + alternativas[2] + "</p>";
    alternativa_tres.innerHTML = texto_C;

    const alternativa_quatro = document.getElementById('D');
    const texto_D = "<p>" + alternativas[3] + "</p>";
    alternativa_quatro.innerHTML = texto_D;
}

//carregar os dados da primeira pegunta
function inicio() {
    const elemento_btn_proximo = document.getElementById('btn-proximo');
    elemento_btn_proximo.disabled = true; //desabilitando btn-proximo

    carregar_dados_da_questao();
}

function escolhe_alternativa(elemento) {
    const estado_btn = document.getElementById('btn-proximo').disabled;

    if (estado_btn == true) {
        console.log(elemento.textContent);
        mudar_estado_do_botao(); //habilita btn
    }
}

function ir_para_o_proximo() {
    const qtd_perguntas = ordem_das_perguntas.length;
    indice_da_ordem_atual = indice_da_ordem_atual + 1;
    if (indice_da_ordem_atual >= qtd_perguntas) {
        redirecionar();
    } else {
        carregar_dados_da_questao();
        mudar_estado_do_botao();
    }
}

inicio();
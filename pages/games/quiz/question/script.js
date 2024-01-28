const ordem_das_perguntas = JSON.parse(sessionStorage.getItem('indices'));
let indice_da_ordem_atual = parseInt(0);
let resposta_correta = "";

function redirecionar() {
    window.location.replace("../score/index.html");
}

function mudar_estado_do_botao() {
    const botao = document.getElementById('btn-proximo');

    if (botao.disabled) botao.disabled = false;
    else botao.disabled = true;
}

function carregar_dados_da_questao() {
    const pergunta = JSON.parse(sessionStorage.getItem(ordem_das_perguntas[indice_da_ordem_atual]));
    resposta_correta = pergunta.resposta;

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
    alternativa_um.style.backgroundColor = "white";

    const alternativa_dois = document.getElementById('B');
    const texto_B = "<p>" + alternativas[1] + "</p>";
    alternativa_dois.innerHTML = texto_B;
    alternativa_dois.style.backgroundColor = "white";

    const alternativa_tres = document.getElementById('C');
    const texto_C = "<p>" + alternativas[2] + "</p>";
    alternativa_tres.innerHTML = texto_C;
    alternativa_tres.style.backgroundColor = "white";

    const alternativa_quatro = document.getElementById('D');
    const texto_D = "<p>" + alternativas[3] + "</p>";
    alternativa_quatro.innerHTML = texto_D;
    alternativa_quatro.style.backgroundColor = "white";
}

function inicio() {
    const elemento_btn_proximo = document.getElementById('btn-proximo');
    elemento_btn_proximo.disabled = true;

    carregar_dados_da_questao();
}

function escolhe_alternativa(elemento) {
    const estado_btn = document.getElementById('btn-proximo').disabled;
    console.log(resposta_correta)

    if (estado_btn == true) {
        if (resposta_correta === elemento.textContent) {
            const pontos = parseInt(sessionStorage.getItem('pontos')) + 1;
            sessionStorage.setItem('pontos', pontos);
            console.log(pontos);
            elemento.style.backgroundColor = "green";
        } else {
            elemento.style.backgroundColor = "red";
        }
        mudar_estado_do_botao();
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
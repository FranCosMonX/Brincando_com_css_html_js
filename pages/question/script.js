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

    //importante notar: como a resposta esta sendo comparada com o txt do html, não pode haver espaçamento entre as tags resgatadas usando `
    const campoAlternativas = document.getElementById('alternativas');
    const texto = `
    <div class="alternativa" id="A" onclick="escolhe_alternativa(this)"><p>${alternativas[0]}</p></div>
    <div class="alternativa" id="B" onclick="escolhe_alternativa(this)"><p>${alternativas[1]}</p></div>
    <div class="alternativa" id="C" onclick="escolhe_alternativa(this)"><p>${alternativas[2]}</p></div>
    <div class="alternativa" id="D" onclick="escolhe_alternativa(this)"><p>${alternativas[3]}</p></div>`;
    campoAlternativas.innerHTML = texto;
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
            console.log(elemento?.id);
            document.getElementById(elemento?.id).style.backgroundColor = "green";
            //elemento.style.backgroundColor = "green";
        } else {
            console.log(elemento?.id);
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
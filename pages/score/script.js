function redirecionar() {
    window.location.replace("../../index.html");
}

function execute() {
    const qtd_perguntas = sessionStorage.getItem('quantidade de perguntas');
    const pontos = sessionStorage.getItem('pontos');
    if (pontos < (qtd_perguntas / 2)) {
        document.getElementById('parabenizacao').innerText = "Tente novamente.";
    }
    const texto = `
        Você acertou ${pontos}/${qtd_perguntas} perguntas.
        `
    document.getElementById('msg-acertos').innerText = texto;
}

execute();
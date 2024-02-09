# Quiz de Inglês

Projeto simples criado para treinar HTML, CSS e JS com o objetivo de construir um jogo simples.

## Requisitos
* VSCode instalado (Recomendado)

## Desenvolvimento

### Questões e seus dados

As questões e alternativas estão sendo carregados no HTML por um script. Isso ajuda a evitar complexidade ao alterar as questões após o usuário acionar o comando para ir a próxima e não atrapalha o estilo declarado no arquivo de estilos (Style.css).

### Ordem das questões

As questões são apresentadas em ordem aleatória. A lógica seguida foi: construir um vetor de tamanho N, sendo N o numero de perguntas do Quiz. Este vetor armazena os indices inteiros positivos de 0 à (N-1) sem repetição.

No JS, podemos gerar um número aleatório ao chamar a função random() da biblioteca Math do JS, ou seja, `Math.random()` que irá me retornar um número entre 0 à 1. Com isso em mente, basta multiplicar o resultado pela quantidade de questões. Por exemplo: com 5 questões e com número 0.95 gerado o resultado seria 4.75.

É importante citar que as perguntas seriam armazenadas em um vetor. Um vetor é acessado a partir do indice 0 ao invés do 1 (sistema decimal, 0 - 9). Isso é excelente, já que o maior número inteiro retornado seria 4. Entretanto, tem um problema: o resultado pode vir como um número decimal.

Para resolver isto basta arrendondar o número levando em consideração apenas o piso (floor) ou teto (Cell), ou seja, o menor numero inteiro ou maior numero inteiro. Como a intenção é usar o 0 como primeiro elemento do vetor, foi usado o método floor() para que seja feito o arrendondamento para o menor número inteiro. Vale lembrar que ambos os métodos são da biblioteca Math. O código completo usado é o seguinte:

```
Math.floor(Math.random() * 5)
```

Isto resolve o problema do número aleatório ser gerado, mas como evitar a repetição de números dentro do vetor?

Como mencionado anteriormente, o vetor terá o tamanho N, sendo N a quantidade de perguntas do Quiz. Para preencher este vetor com números aleatórios sem que haja repetição basta verificar, antes de o acionar no vetor, se ele está no vetor, se ele não tiver basta gerar um novo numero e fazer a mesma verificação. Com isto, percebe-se que estaríamos dentro de um loop, então qual seria a condição de saída? Simplesmente quando o vetor ficar cheio, ou seja, o loop existirá até que `length(vetor) < N`. Para ficar ainda mais claro, veja o pseudo-código:
```
VAR
vetor : []
contador : inteiro
valor, limMax : inteiro

INICIO NUMERO_ALEATORIO(arg)
    returna floor(random() * arg)
FIM NUMERO_ALEATORIO

INICIO VALOR_JA_EXISTE (a)
  retorna vetor.contem(a)
FIM VALOR_JA_EXISTE

INICIO
limMax = 5
ENQUANTO tamanho(vetor) < N FAÇA
  valor = NUMERO_ALEATORIO(limMax)
  SE VALOR_JA_EXISTE (valor) FAÇA
    // repete o loop
  SENÃO FAÇA
    valor.inclui(valor)
  FIMSE
FIMENQUANTO
```

Vale citar que em JS é usado `<vetor>.includes(valor)` para verificar se um valor já está contido no vetor e `<vetor>.push(valor)` para adicionar um valor ao vetor. O código real em JS seria o seguinte:

```javascript
const vetor = [];

function gerar_numero_aleatorio(limite) {
    return Math.floor(Math.random() * limite);
}

function indice_ja_se_encontra(indice) { //retorna true se já existe e false se não existe
    return vetor.includes(indice);
}

function embaralhar_vetor() {
    const tamanho = 5;
    while (vetor.length < tamanho) {
        const valor = gerar_numero_aleatorio(tamanho);
        if (!indice_ja_se_encontra(valor)) {
            vetor.push(valor);
        }
    }
}
embaralhar_vetor();
console.log(vetor);
```

#### Problemas enfrentados

O estilo da pseudo-classe :hover das alternativas estava sendo sobrescritos ao tentar alterar a cor de fundo para a cor inicial após o usuário selecionar uma das alternativas (que faz com que o campo fique verde ou vermelho).

## Aplicação

O enunciado está em português mas a resposta, que o usuário irá escolher, está em inglês. O objetivo é que o usuário escolha uma resposta correta de acordo com o que é pedido no enunciado.

### Interface

Há três interfaces simples. Uma página inicial onde aparece a apresentação do jogo, a interface de questões que serão apresentadas as questões e alternativas para que o usuário possa escolher e a interface final que irá apresentar a quantidade perguntas acertadas pelo usuário. Vale mencionar que o usuário não poderá pular questões e, para facilitar a identificação das alternativas, elas mudaram de cor ao passar o mouse por cima.

### Dispositivos compativeis

A atual aplicação foi construída para ser suportada tanto por computadores quanto para smartphones.
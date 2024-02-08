# Quiz de Inglês

Projeto simples criado para treinar HTML, CSS e JS com o objetivo de construir um jogo simples.

## Requisitos
* VSCode instalado

## Desenvolvimento

### Questões e seus dados

As questões e alternativas estão sendo carregados no HTML por um script. Isso ajuda a evitar complexidade ao alterar as questões após o usuário acionar o comando para ir a próxima e não atrapalha o estilo declarado no arquivo de estilos (Style.css).

#### Problemas enfrentados

O estilo da pseudo-classe :hover das alternativas estava sendo sobrescritos ao tentar alterar a cor de fundo para a cor inicial após o usuário selecionar uma das alternativas (que faz com que o campo fique verde ou vermelho).

## Aplicação

O enunciado está em português mas a resposta, que o usuário irá escolher, está em inglês. O objetivo é que o usuário escolha uma resposta correta de acordo com o que é pedido no enunciado.

### Interface

Há três interfaces simples. Uma página inicial onde aparece a apresentação do jogo, a interface de questões que serão apresentadas as questões e alternativas para que o usuário possa escolher e a interface final que irá apresentar a quantidade perguntas acertadas pelo usuário. Vale mencionar que o usuário não poderá pular questões e, para facilitar a identificação das alternativas, elas mudaram de cor ao passar o mouse por cima.

### Dispositivos compativeis

A atual aplicação foi construída para ser suportada tanto por computadores quanto para smartphones.
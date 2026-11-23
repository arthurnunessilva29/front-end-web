# Projeto 3 - Descubra seu caminho no Front-End

## Sobre o projeto
Esta página foi feita como atividade de Fundamentos de JavaScript. A pessoa informa o nome, escolhe uma área (HTML, CSS ou JavaScript) e recebe uma dica para começar a estudar.

Também existe um botão para mudar entre o tema claro e o tema escuro.

## Arquivos
- `index.html`: estrutura da página.
- `css/estilo.css`: cores, tamanhos e organização dos elementos.
- `js/script.js`: validação do formulário, mensagens e troca de tema.

## Como executar
1. Extraia a pasta do projeto.
2. Abra a pasta no Visual Studio Code.
3. Abra o arquivo `index.html` no navegador. Também pode usar a extensão Live Server.

## O que testar
1. Tente enviar o formulário sem digitar o nome.
2. Digite um nome, mas não escolha uma área.
3. Escolha HTML e gere a orientação.
4. Repita com CSS e JavaScript.
5. Clique em "Mudar tema" para testar o tema escuro e voltar ao claro.
6. Abra a página em uma tela menor para conferir a adaptação.

## Explicação de algumas partes do código
- `getElementById()` encontra um elemento pelo seu id.
- `addEventListener()` espera uma ação, como enviar o formulário ou clicar no botão.
- `.value` pega o que foi digitado ou selecionado.
- `.trim()` tira espaços extras do começo e do final do nome.
- `if/else` verifica se os campos foram preenchidos.
- `switch` escolhe a mensagem de acordo com a área.
- `textContent` coloca o texto de resposta na página.
- `classList.toggle()` adiciona ou remove a classe usada no tema escuro.

Os comentários dentro dos arquivos CSS e JavaScript explicam as partes principais do código.


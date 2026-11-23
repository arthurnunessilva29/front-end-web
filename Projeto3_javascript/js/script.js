// Pegamos os elementos da página que vamos usar
const formulario = document.getElementById("formulario");
const campoNome = document.getElementById("nome");
const campoArea = document.getElementById("area");
const resultado = document.getElementById("resultado");
const botaoTema = document.getElementById("botaoTema");

// Essa função mostra uma mensagem quando falta alguma informação
function mostrarErro(mensagem) {
    resultado.textContent = mensagem;
}

// Essa função escolhe uma dica de acordo com a área selecionada
function gerarOrientacao(nome, area) {
    let mensagem = "";

    // Verifica qual opção foi escolhida pelo visitante
    switch (area) {
        case "html":
            mensagem = `Olá, ${nome}! Comece aprendendo as tags HTML, como títulos, parágrafos, links e imagens.`;
            break;

        case "css":
            mensagem = `Olá, ${nome}! Estude cores, fontes, margens, espaçamentos e como organizar os elementos da página.`;
            break;

        case "javascript":
            mensagem = `Olá, ${nome}! Pratique variáveis, funções, condições e eventos para deixar suas páginas interativas.`;
            break;

        default:
            mensagem = "Selecione uma área para receber uma orientação.";
    }

    // Mostra a mensagem na página
    resultado.textContent = mensagem;
}

// Essa função é executada quando o formulário é enviado
function enviarFormulario(evento) {
    // Evita que a página recarregue ao enviar o formulário
    evento.preventDefault();

    // Pega o nome digitado e remove espaços do começo e do final
    const nome = campoNome.value.trim();

    // Pega a área que foi selecionada
    const area = campoArea.value;

    // Confere se o nome foi preenchido
    if (nome === "") {
        mostrarErro("Por favor, digite seu nome.");
    } else if (area === "") {
        mostrarErro("Por favor, escolha uma área de interesse.");
    } else {
        // Se estiver tudo preenchido, gera a orientação
        gerarOrientacao(nome, area);
    }
}

// Essa função troca entre o tema claro e o tema escuro
function alternarTema() {
    document.body.classList.toggle("escuro");
}

// Quando o formulário for enviado, chama a função enviarFormulario
formulario.addEventListener("submit", enviarFormulario);

// Quando clicar no botão, muda o tema
botaoTema.addEventListener("click", alternarTema);

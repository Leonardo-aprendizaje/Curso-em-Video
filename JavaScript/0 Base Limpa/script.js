// Console interno
const consoleInterno = document.getElementById("console-messages");
function logConsole(msg) {
    const p = document.createElement("p");
    p.textContent = msg;
    consoleInterno.appendChild(p);
    consoleInterno.scrollTop = consoleInterno.scrollHeight;
}

// Área de testes e botão limpar
const areaTeste = document.getElementById("area-teste");
const botaoLimpar = document.getElementById("limpar");

botaoLimpar.addEventListener("click", () => {
    areaTeste.innerHTML = "<p>Área de testes limpa. Coloque seu HTML aqui.</p>";
    logConsole("Área de testes limpa.");
});

// Agora você pode adicionar qualquer JS de teste abaixo
// Exemplo:
// const novoElemento = document.createElement("p");
// novoElemento.textContent = "Meu novo teste";
// areaTeste.appendChild(novoElemento);
// logConsole("Novo elemento adicionado!");


// Seleciona os elementos do HTML que vamos manipular
const horasElemento = document.getElementById('horas');
const minutosElemento = document.getElementById('minutos');
const segundosElemento = document.getElementById('segundos');

// Função que atualiza o relógio
function atualizarRelogio() {
    // Cria um objeto Date para obter a hora atual
    const agora = new Date();

    // Extrai as horas, minutos e segundos
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    // Formata os números para sempre terem dois dígitos (ex: 07 em vez de 7)
    const horasFormatadas = horas.toString().padStart(2, '0');
    const minutosFormatados = minutos.toString().padStart(2, '0');
    const segundosFormatados = segundos.toString().padStart(2, '0');

    // Atualiza o conteúdo dos elementos <span> no HTML
    horasElemento.textContent = horasFormatadas;
    minutosElemento.textContent = minutosFormatados;
    segundosElemento.textContent = segundosFormatados;
}

// Chama a função a cada 1000 milissegundos (1 segundo) para manter o relógio atualizado
setInterval(atualizarRelogio, 1000);

// Chama a função uma vez no início para não haver um atraso de 1 segundo ao carregar a página
atualizarRelogio();


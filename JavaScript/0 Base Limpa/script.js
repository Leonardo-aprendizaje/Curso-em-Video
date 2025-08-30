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
